
import Layout from "@/components/layout/Layout";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/ui/CategoryCard";
import SectionHeading from "@/components/ui/SectionHeading";

const CategoriesPage = () => {
  return (
    <Layout>
      <div className="segula-container">
        <SectionHeading 
          title="All Categories"
          description="Explore our complete collection of modest fashion categories"
          className="mb-8 md:mb-12"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              image={category.image}
              link={category.path}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
