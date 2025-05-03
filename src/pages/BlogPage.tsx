
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Product for Your Needs",
      excerpt: "Learn about the factors to consider when selecting products that best meet your requirements.",
      date: "May 1, 2025",
      author: "Jane Smith"
    },
    {
      id: 2,
      title: "The Benefits of Quality Services",
      excerpt: "Discover why investing in quality services can save you time, money, and hassle in the long run.",
      date: "April 25, 2025",
      author: "John Doe"
    },
    {
      id: 3,
      title: "Industry Trends to Watch",
      excerpt: "Stay informed about the latest developments and trends shaping our industry.",
      date: "April 18, 2025",
      author: "Sarah Johnson"
    },
    {
      id: 4,
      title: "Customer Success Stories",
      excerpt: "Read about real experiences from our satisfied customers and how our products helped them.",
      date: "April 10, 2025",
      author: "Michael Brown"
    }
  ];

  return (
    <Layout>
      <div className="segula-container py-8 sm:py-12 md:py-16">
        <SectionHeading 
          title="Blog" 
          description="Insights, tips, and news from our team"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow"
            >
              <div className="bg-muted h-48 w-full"></div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-serif font-bold mb-2">
                  <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
