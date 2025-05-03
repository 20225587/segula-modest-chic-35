
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";

const AvailableStockPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <SectionHeading 
          title="Available Stock" 
          description="Browse our current inventory of products available for purchase"
        />

        <div className="mt-8 sm:mt-12">
          <ProductGrid products={products} columns={4} />
        </div>
      </div>
    </Layout>
  );
};

export default AvailableStockPage;
