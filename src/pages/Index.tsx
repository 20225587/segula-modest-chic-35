
import Layout from "@/components/layout/Layout";
import BannerSlider from "@/components/ui/BannerSlider";
import { homeBanners, categoriesData } from "@/data/banners";
import CategoryCard from "@/components/ui/CategoryCard";
import ValueProposition from "@/components/ui/ValueProposition";
import FeaturedProducts from "@/components/product/FeaturedProducts";
import { getFeaturedProducts, getNewProducts } from "@/data/products";
import AboutSection from "@/components/sections/AboutSection";
import SectionHeading from "@/components/ui/SectionHeading";

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewProducts();
  
  return (
    <Layout>
      {/* Hero Banner */}
      <BannerSlider slides={homeBanners} />
      
      {/* Value Proposition */}
      <ValueProposition />
      
      {/* Categories Section */}
      <section className="segula-section">
        <div className="segula-container">
          <SectionHeading 
            title="Shop by Category"
            description="Explore our collection of modest, sustainable fashion"
          />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
            {categoriesData.map((category) => (
              <CategoryCard
                key={category.name}
                name={category.name}
                image={category.image}
                link={category.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <FeaturedProducts 
        products={featuredProducts}
        title="Featured Collection"
        description="Discover our handpicked selection of modest, eco-friendly pieces from our latest collection."
      />
      
      {/* About Section */}
      <AboutSection />
      
      {/* New Arrivals */}
      <FeaturedProducts 
        products={newArrivals}
        title="New Arrivals"
        description="Be the first to shop our latest modest and sustainable styles."
      />
      
      {/* Newsletter section is included in Footer */}
    </Layout>
  );
};

export default Index;
