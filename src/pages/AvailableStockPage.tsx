
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";
import { Product } from "@/types/product";

const AvailableStockPage = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const location = useLocation();
  
  useEffect(() => {
    // Get search query from URL if present
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');
    
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const results = products.filter((product) => 
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.description.toLowerCase().includes(lowerCaseQuery) ||
        product.category.toLowerCase().includes(lowerCaseQuery) ||
        product.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(products);
    }
  }, [location.search]);
  
  return (
    <Layout>
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <SectionHeading 
          title="Available Stock" 
          description="Browse our current inventory of products available for purchase"
        />

        {location.search && filteredProducts.length !== products.length && (
          <div className="mt-4 mb-6">
            <p className="text-sm">
              Showing {filteredProducts.length} out of {products.length} products
            </p>
          </div>
        )}

        <div className="mt-8 sm:mt-12">
          <ProductGrid products={filteredProducts} columns={4} />
        </div>
      </div>
    </Layout>
  );
};

export default AvailableStockPage;
