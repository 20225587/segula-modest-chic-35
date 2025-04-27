
import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Modest Maxi Dress",
    price: 79.99,
    description: "A beautiful flowing maxi dress made with organic cotton. Perfect for any occasion while maintaining modesty and style.",
    category: "dresses",
    tags: ["eco-friendly", "organic", "modest"],
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1411&auto=format&fit=crop"
    ],
    featured: true,
    new: true,
    inStock: true
  },
  {
    id: "2",
    name: "Eco-Friendly Blouse",
    price: 45.99,
    description: "A versatile and modest blouse made from recycled materials. Elegant design with comfortable fit.",
    category: "tops",
    tags: ["eco-friendly", "recycled", "modest"],
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1410&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525171254930-643fc658b64e?q=80&w=1470&auto=format&fit=crop"
    ],
    featured: false,
    new: true,
    inStock: true
  },
  {
    id: "3",
    name: "Sustainable Denim Skirt",
    price: 59.99,
    salePrice: 49.99,
    description: "A modest-length denim skirt made with sustainable practices and recycled materials.",
    category: "bottoms",
    tags: ["sustainable", "recycled", "modest"],
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?q=80&w=1473&auto=format&fit=crop"
    ],
    featured: true,
    new: false,
    inStock: true
  },
  {
    id: "4",
    name: "Organic Cotton Cardigan",
    price: 65.99,
    description: "A comfortable and stylish cardigan made from 100% organic cotton. Perfect layering piece for modest outfits.",
    category: "outerwear",
    tags: ["eco-friendly", "organic", "modest"],
    images: [
      "https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?q=80&w=1471&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511085264800-bc9947371a4e?q=80&w=1374&auto=format&fit=crop"
    ],
    featured: false,
    new: false,
    inStock: true
  },
  {
    id: "5",
    name: "Faith-Inspired Necklace",
    price: 29.99,
    description: "A beautiful handcrafted necklace with a cross pendant, made from recycled metals.",
    category: "accessories",
    tags: ["faith-based", "recycled", "sustainable"],
    images: [
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1374&auto=format&fit=crop"
    ],
    featured: true,
    new: true,
    inStock: true
  },
  {
    id: "6",
    name: "Modest Wrap Dress",
    price: 85.99,
    salePrice: 69.99,
    description: "An elegant wrap dress that provides modest coverage while highlighting your style. Made with sustainable fabrics.",
    category: "dresses",
    tags: ["sustainable", "modest"],
    images: [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1476&auto=format&fit=crop"
    ],
    featured: true,
    new: false,
    inStock: true
  },
  {
    id: "7",
    name: "Eco Linen Pants",
    price: 69.99,
    description: "Comfortable, flowing linen pants made with eco-friendly processes. Perfect for a modest yet stylish look.",
    category: "bottoms",
    tags: ["eco-friendly", "sustainable", "modest"],
    images: [
      "https://images.unsplash.com/photo-1548624313-0396c75f3f2c?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1374&auto=format&fit=crop"
    ],
    featured: false,
    new: true,
    inStock: true
  },
  {
    id: "8",
    name: "Modest Swimwear Set",
    price: 120.99,
    description: "A modest yet fashionable swimwear set that provides full coverage while allowing you to enjoy water activities.",
    category: "tops",
    tags: ["modest", "sustainable"],
    images: [
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=1469&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527736947477-2790e28f3443?q=80&w=1462&auto=format&fit=crop"
    ],
    featured: true,
    new: true,
    inStock: true
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.new);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
