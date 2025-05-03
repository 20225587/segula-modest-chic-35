
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Star } from "lucide-react";

const ClientReviewsPage = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Exceptional service and products! I'm extremely satisfied with my purchase and the support I received throughout the process.",
      date: "April 30, 2025"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      comment: "Very good quality and value for money. The customer service team was responsive and helpful. Would recommend.",
      date: "April 25, 2025"
    },
    {
      id: 3,
      name: "Emma Williams",
      rating: 5,
      comment: "I've been a loyal customer for years and have never been disappointed. Their commitment to quality is unmatched.",
      date: "April 18, 2025"
    },
    {
      id: 4,
      name: "David Brown",
      rating: 4,
      comment: "Solid products and efficient service. There's room for improvement in delivery times, but overall a positive experience.",
      date: "April 12, 2025"
    },
    {
      id: 5,
      name: "Lisa Garcia",
      rating: 5,
      comment: "Outstanding experience from start to finish. The team went above and beyond to ensure my satisfaction.",
      date: "April 5, 2025"
    }
  ];

  return (
    <Layout>
      <div className="segula-container py-8 sm:py-12 md:py-16">
        <SectionHeading 
          title="Client Reviews" 
          description="What our customers say about our products and services"
        />

        <div className="space-y-6 sm:space-y-8 mt-8 sm:mt-12">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="border rounded-lg p-6 sm:p-8 bg-card shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{review.date}</span>
              </div>
              <p className="text-sm sm:text-base mb-3 sm:mb-4 italic">"{review.comment}"</p>
              <div className="font-medium text-sm sm:text-base">{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ClientReviewsPage;
