export interface Product {
  id: string;
  name: string;
  category: "Coffee" | "Tea";
  description: string;
  price: number;
  image: string;
  features: string[];
}/**
 * Hardcoded Premium Product Database
 * The user requested to remove Firebase completely from the product loading
 * so that it natively loads instantly without backend dependencies.
 */
export const fetchProducts = async (): Promise<Product[]> => {
  // Simulate a microscopic delay just to let the cool loading animations trigger
  await new Promise(r => setTimeout(r, 400));
  return [
    // --- Coffee Premixes ---
    {
      id: "c1",
      name: "Classic Cappuccino",
      category: "Coffee",
      description: "Rich, frothy, and authentic café-style cappuccino experience.",
      price: 15.99,
      image: "/images/products/classic_cappuccino.png",
      features: ["Premium Arabica", "Instant Froth", "No Added Preservatives"]
    },
    {
      id: "c2",
      name: "Mocha Hazelnut",
      category: "Coffee",
      description: "A decadent blend of fine cocoa, roasted hazelnut, and strong coffee.",
      price: 17.50,
      image: "/images/products/mocha_hazelnut.png",
      features: ["Real Cocoa", "Roasted Hazelnut Notes", "Energizing"]
    },
    {
      id: "c3",
      name: "Strong Espresso",
      category: "Coffee",
      description: "A dark, intense espresso premix for the perfect morning kick.",
      price: 14.99,
      image: "/images/products/strong_espresso.png",
      features: ["Dark Roast", "High Caffeine", "Bold Flavor"]
    },
    {
      id: "c4",
      name: "Vanilla Latte",
      category: "Coffee",
      description: "Smooth, sweet, and creamy latte with natural Madagascar vanilla.",
      price: 16.50,
      image: "/images/products/vanilla_latte.png",
      features: ["Smooth Texture", "Natural Tahitian Vanilla", "Comforting"]
    },
    {
      id: "c5",
      name: "Caramel Macchiato",
      category: "Coffee",
      description: "A luxurious layered coffee experience with buttery caramel notes.",
      price: 18.00,
      image: "/images/products/caramel_macchiato.png",
      features: ["Buttery Caramel", "Layered Taste", "Dessert Coffee"]
    },
    {
      id: "c6",
      name: "Filter Coffee Blend",
      category: "Coffee",
      description: "Authentic South Indian style filter coffee in an instant premix.",
      price: 13.99,
      image: "/images/products/filter_coffee.png",
      features: ["Chicory Blend", "Traditional Taste", "Aromatic"]
    },
    {
      id: "c7",
      name: "Irish Cream Coffee",
      category: "Coffee",
      description: "Non-alcoholic classic Irish cream flavor infused with premium coffee.",
      price: 19.50,
      image: "/images/products/irish_cream.png",
      features: ["Non-Alcoholic", "Creamy Finish", "Indulgent"]
    },
    {
      id: "c8",
      name: "Cold Brew Instant",
      category: "Coffee",
      description: "Specially formulated to dissolve instantly in cold water or milk.",
      price: 15.50,
      image: "/images/products/cold_brew.png",
      features: ["Dissolves Cold", "Low Acidity", "Refreshing"]
    },
    {
      id: "c9",
      name: "Decaf Colombian",
      category: "Coffee",
      description: "All the rich flavor of Colombian coffee without the caffeine jitters.",
      price: 16.99,
      image: "/images/products/decaf_colombian.png",
      features: ["99.9% Caffeine Free", "Rich Profile", "Evening Drink"]
    },

    // --- Tea Premixes ---
    {
      id: "t1",
      name: "Masala Chai",
      category: "Tea",
      description: "Our signature blend of Assam tea and 7 authentic Indian spices.",
      price: 12.99,
      image: "/images/products/masala_chai.png",
      features: ["Cardamom & Ginger", "Authentic Assam", "Immunity Booster"]
    },
    {
      id: "t2",
      name: "Cardamom (Elaichi) Chai",
      category: "Tea",
      description: "A fragrant, soothing tea enriched with premium green cardamom.",
      price: 13.50,
      image: "/images/products/cardamom_chai.png",
      features: ["Real Cardamom", "Digestive Aid", "Soothing Aroma"]
    },
    {
      id: "t3",
      name: "Ginger (Adrak) Chai",
      category: "Tea",
      description: "Robust and spicy ginger tea, perfect for cold mornings.",
      price: 12.50,
      image: "/images/products/ginger_chai.png",
      features: ["Spicy & Warming", "Throat Soothing", "Strong Brew"]
    },
    {
      id: "t4",
      name: "Lemongrass Green Tea",
      category: "Tea",
      description: "A refreshing, antioxidant-rich green tea with zesty lemongrass.",
      price: 14.99,
      image: "/images/products/lemongrass_green_tea.png",
      features: ["Antioxidant Rich", "Detoxifying", "Refreshing"]
    },
    {
      id: "t5",
      name: "Kashmiri Kahwa",
      category: "Tea",
      description: "A luxurious traditional blend of green tea, saffron, almonds, and spices.",
      price: 21.00,
      image: "/images/products/kashmiri_kahwa.png",
      features: ["Real Saffron", "Crushed Almonds", "Warming Spices"]
    },
    {
      id: "t6",
      name: "Matcha Latte Premix",
      category: "Tea",
      description: "Ceremonial grade Japanese matcha blended with creamy milk powder.",
      price: 24.50,
      image: "/images/products/matcha_latte.png",
      features: ["High L-Theanine", "Ceremonial Grade", "Subtle Sweetness"]
    },
    {
      id: "t7",
      name: "Earl Grey Classic",
      category: "Tea",
      description: "Premium black tea infused with the citrusy aroma of bergamot.",
      price: 15.00,
      image: "/images/products/earl_grey.png",
      features: ["Bergamot Oil", "Floral Notes", "Afternoon Tea"]
    },
    {
      id: "t8",
      name: "Chamomile Honey",
      category: "Tea",
      description: "A calming caffeine-free herbal infusion perfect before bedtime.",
      price: 16.50,
      image: "/images/products/chamomile_honey.png",
      features: ["Caffeine Free", "Sleep Aid", "Natural Honey"]
    },
    {
      id: "t9",
      name: "Saffron (Kesar) Chai",
      category: "Tea",
      description: "The royal taste of chai infused with pure Kashmiri saffron.",
      price: 19.99,
      image: "/images/products/saffron_chai.png",
      features: ["Pure Kesar", "Rich Golden Color", "Premium Royal Taste"]
    }
  ];
};
