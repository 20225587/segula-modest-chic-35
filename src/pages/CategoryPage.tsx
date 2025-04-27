
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
    return <Layout><div>Category not found</div></Layout>;
  }

  return (
    <Layout>
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden mb-12">
        <img 
          src={banner.image} 
          alt={banner.title} 
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{banner.title}</h1>
            <p className="text-xl md:text-2xl">{banner.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="segula-container">
        <SectionHeading 
          title={`${category?.charAt(0).toUpperCase()}${category?.slice(1)} Collection`}
          description="Explore our thoughtfully curated selection of modest and sustainable fashion"
        />
        
        <div className="mt-8 md:mt-12">
          <ProductGrid products={products} />
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
