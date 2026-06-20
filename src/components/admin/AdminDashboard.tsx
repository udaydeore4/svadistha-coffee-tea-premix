import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs, orderBy, query, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

interface Enquiry {
  id: string;
  name: string;
  phone: string;
  city: string;
  productInterest: string;
  flavour: string;
  quantity: string;
  message: string;
  createdAt: any;
  status: string;
}

export const AdminDashboard: React.FC = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch function isolated so we can re-call it after mutations
  const fetchEnquiries = async () => {
    try {
      const q = query(collection(db, 'enquiries'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
      })) as Enquiry[];
      setEnquiries(data);
    } catch (error) {
      console.error("Error fetching enquiries: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    window.location.reload();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to permanently delete this enquiry?")) {
      try {
        await deleteDoc(doc(db, 'enquiries', id));
        fetchEnquiries(); // Refresh the list
      } catch (error) {
        console.error("Error deleting document: ", error);
        alert("Failed to delete. Check console.");
      }
    }
  };

  const handleToggleComplete = async (id: string, currentStatus: string) => {
    try {
      const newStatus = currentStatus === 'completed' ? 'new' : 'completed';
      await updateDoc(doc(db, 'enquiries', id), {
        status: newStatus
      });
      fetchEnquiries(); // Refresh the list
    } catch (error) {
      console.error("Error updating document: ", error);
      alert("Failed to update status. Check console.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0503] font-body text-stone-200">
      
      {/* Admin Navbar */}
      <nav className="border-b border-white/10 bg-[#110905] px-8 py-4 flex justify-between items-center">
        <div className="font-headline text-2xl tracking-tighter">
           Admin <span className="text-primary italic">Portal</span>
        </div>
        <button 
           onClick={handleLogout}
           className="text-stone-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
        >
          <span className="material-symbols-outlined text-sm">logout</span> Logout
        </button>
      </nav>

      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-headline font-semibold text-white">Incoming Enquiries</h1>
          <p className="text-stone-400 mt-2">Manage customer leads and product requests.</p>
        </div>

        {loading ? (
           <div className="flex justify-center py-20">
             <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
           </div>
        ) : enquiries.length === 0 ? (
           <div className="bg-[#110905] border border-white/5 rounded-[2rem] p-12 text-center shadow-xl">
              <span className="material-symbols-outlined text-6xl text-stone-700 mb-4 block">mail</span>
              <p className="text-stone-400 text-lg">No enquiries received yet.</p>
           </div>
        ) : (
          <div className="bg-[#110905] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/50 text-[#ffb960] font-headline text-sm tracking-widest uppercase border-b border-white/10">
                    <th className="p-5 font-semibold">Date</th>
                    <th className="p-5 font-semibold">Customer</th>
                    <th className="p-5 font-semibold">Contact</th>
                    <th className="p-5 font-semibold">Product Need</th>
                    <th className="p-5 font-semibold">Details</th>
                    <th className="p-5 font-semibold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {enquiries.map((enq, idx) => {
                    const isCompleted = enq.status === 'completed';
                    return (
                      <motion.tr 
                        key={enq.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`hover:bg-white/[0.02] transition-all group ${isCompleted ? 'opacity-40 grayscale' : ''}`}
                      >
                        <td className="p-5 whitespace-nowrap text-sm text-stone-400">
                          {enq.createdAt ? new Date(enq.createdAt.seconds * 1000).toLocaleDateString() : 'Just now'}
                        </td>
                        <td className="p-5">
                          <div className={`font-semibold ${isCompleted ? 'line-through text-stone-500' : 'text-stone-200'}`}>
                            {enq.name}
                          </div>
                          <div className="text-sm text-stone-500 flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[14px]">location_on</span> {enq.city}
                          </div>
                        </td>
                        <td className="p-5 text-stone-400 text-sm">
                          {enq.phone}
                        </td>
                        <td className="p-5">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-headline font-bold uppercase border ${
                            isCompleted 
                              ? 'bg-stone-800 text-stone-500 border-stone-700' 
                              : 'bg-primary/10 text-primary border-primary/20'
                          }`}>
                            {enq.productInterest}
                          </span>
                          {enq.flavour && (
                             <div className="text-xs text-stone-500 mt-2">Flavour: {enq.flavour}</div>
                          )}
                        </td>
                        <td className="p-5 max-w-[200px]">
                          <div className="text-sm text-stone-400">
                            <span className="font-semibold">Qty:</span> {enq.quantity || 'N/A'}
                          </div>
                          {enq.message && (
                            <div className="text-xs text-stone-500 mt-2 italic line-clamp-2 group-hover:line-clamp-none transition-all">
                              "{enq.message}"
                            </div>
                          )}
                        </td>
                        <td className="p-5">
                          <div className="flex items-center justify-center gap-3">
                            {/* Complete Toggle Button */}
                            <button 
                              onClick={() => handleToggleComplete(enq.id, enq.status)}
                              className={`p-2 rounded-lg transition-colors flex items-center justify-center ${
                                isCompleted 
                                  ? 'text-green-500 hover:text-green-400 bg-green-500/10' 
                                  : 'text-stone-500 hover:text-green-400 hover:bg-green-500/10'
                              }`}
                              title={isCompleted ? "Mark as New" : "Mark as Completed"}
                            >
                              <span className="material-symbols-outlined text-[20px]">
                                {isCompleted ? 'undo' : 'check_circle'}
                              </span>
                            </button>
                            
                            {/* Delete Button */}
                            <button 
                              onClick={() => handleDelete(enq.id)}
                              className="p-2 text-stone-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors flex items-center justify-center"
                              title="Delete Enquiry"
                            >
                              <span className="material-symbols-outlined text-[20px]">
                                close
                              </span>
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
