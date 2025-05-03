
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { getProductsByCategory } from "@/data/products";
import ProductGrid from "@/components/product/ProductGrid";
import { categoryBanners } from "@/data/banners";
import SectionHeading from "@/components/ui/SectionHeading";
import { Product } from "@/types/product";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>(getProductsByCategory(category || ''));
  const banner = categoryBanners[category as keyof typeof categoryBanners];

  if (!banner) {
    return <Layout><div className="segula-container">Category not found</div></Layout>;
  }

  return (
    <Layout>
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden mb-6 sm:mb-8 md:mb-12">
        <img 
          src={banner.image} 
          alt={banner.title} 
          className="w-full h-full object-cover absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="text-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-2 sm:mb-4">{banner.title}</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">{banner.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="segula-container">
        <SectionHeading 
          title={`${category?.charAt(0).toUpperCase()}${category?.slice(1)} Collection`}
          description="Explore our thoughtfully curated selection of modest and sustainable fashion"
        />
        
        <div className="mt-6 sm:mt-8 md:mt-12">
          <ProductGrid products={products} />
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
