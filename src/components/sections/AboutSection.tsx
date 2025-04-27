
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="segula-section bg-muted/50">
      <div className="segula-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1604153618722-215dea6b902d?q=80&w=1471&auto=format&fit=crop" 
              alt="About Segula Collection" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-4 border-primary/20 rounded-lg -z-10 hidden md:block"></div>
          </div>
          
          <div>
            <span className="text-sm font-medium text-primary mb-2 block">OUR MISSION</span>
            <h2 className="segula-heading mb-6">Modest Fashion with Purpose</h2>
            <div className="space-y-4 mb-8">
              <p>
                At Segula Collection, we believe that fashion can be both modest and stylish, sustainable and beautiful.
                Our designs are inspired by our faith and commitment to creating clothing that empowers women to express 
                themselves confidently while honoring their values.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed and ethically crafted using eco-friendly materials
                and sustainable practices. We partner with skilled artisans who share our vision and values, ensuring that
                every garment not only looks beautiful but also makes a positive impact.
              </p>
              <p className="font-medium">
                "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven." 
                - Matthew 5:16
              </p>
            </div>
            <Button asChild size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
