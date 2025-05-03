
import { useState, useCallback } from "react";
import { products } from "@/data/products";
import { Product } from "@/types/product";

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }
    
    const lowerCaseQuery = query.toLowerCase();
    
    // Search in product names, descriptions, categories, and tags
    const results = products.filter((product) => 
      product.name.toLowerCase().includes(lowerCaseQuery) ||
      product.description.toLowerCase().includes(lowerCaseQuery) ||
      product.category.toLowerCase().includes(lowerCaseQuery) ||
      product.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
    );
    
    setSearchResults(results);
    setIsSearching(false);
  }, []);
  
  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearching,
    handleSearch,
  };
};
