
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const OurServicesPage = () => {
  const services = [
    {
      title: "Consultation",
      description: "Professional advice and guidance tailored to your specific needs and requirements."
    },
    {
      title: "Design",
      description: "Creative and innovative design solutions that align with your vision and objectives."
    },
    {
      title: "Implementation",
      description: "Efficient and effective execution of plans and strategies to achieve desired outcomes."
    },
    {
      title: "Support",
      description: "Ongoing assistance and maintenance to ensure continued success and satisfaction."
    }
  ];

  return (
    <Layout>
      <div className="segula-container py-8 sm:py-12 md:py-16">
        <SectionHeading 
          title="Our Services" 
          description="Comprehensive solutions tailored to meet your specific needs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="border rounded-lg p-6 sm:p-8 bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg sm:text-xl font-serif font-bold mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OurServicesPage;
