
import { useState } from "react";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import ProductGrid from "./ProductGrid";
import SectionHeading from "@/components/ui/SectionHeading";

interface FeaturedProductsProps {
  products: Product[];
  title?: string;
  description?: string;
}

const FeaturedProducts = ({
  products,
  title = "Featured Collection",
  description = "Discover our handpicked selection of modest, eco-friendly pieces from our latest collection."
}: FeaturedProductsProps) => {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>(products.slice(0, 4));
  const [showingAll, setShowingAll] = useState(false);
  
  const handleViewMore = () => {
    if (showingAll) {
      setVisibleProducts(products.slice(0, 4));
    } else {
      setVisibleProducts(products);
    }
    setShowingAll(!showingAll);
  };

  return (
    <section className="segula-section">
      <div className="segula-container">
        <SectionHeading
          title={title}
          description={description}
        />
        
        <div className="mt-8 md:mt-12">
          <ProductGrid products={visibleProducts} />
        </div>
        
        {products.length > 4 && (
          <div className="mt-10 text-center">
            <Button onClick={handleViewMore} variant="outline" size="lg">
              {showingAll ? "View Less" : "View More"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
