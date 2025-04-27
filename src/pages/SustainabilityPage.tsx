
import Layout from "@/components/layout/Layout";
import { Leaf, Recycle, Earth } from "lucide-react";
import { Button } from "@/components/ui/button";

const SustainabilityPage = () => {
  return (
    <Layout>
      <div className="segula-container py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary mb-2 block">Our Commitment</span>
          <h1 className="text-4xl font-serif font-bold mb-6">Sustainable Fashion, Ethical Practices</h1>
          <p className="text-lg text-muted-foreground">
            We believe in fashion that nurtures both people and the planet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <Leaf className="mx-auto h-12 w-12 text-primary mb-4" />
            <h2 className="text-xl font-bold mb-4">Eco-Friendly Materials</h2>
            <p className="text-muted-foreground">
              We use organic, recycled, and sustainable fabrics that minimize environmental impact.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <Recycle className="mx-auto h-12 w-12 text-primary mb-4" />
            <h2 className="text-xl font-bold mb-4">Circular Fashion</h2>
            <p className="text-muted-foreground">
              Our production process focuses on reducing waste and promoting clothing recycling.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <Earth className="mx-auto h-12 w-12 text-primary mb-4" />
            <h2 className="text-xl font-bold mb-4">Carbon Neutral</h2>
            <p className="text-muted-foreground">
              We offset our carbon emissions and continuously work to reduce our environmental footprint.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">Our Sustainable Practices</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>- 100% Organic Cotton Sourcing</li>
              <li>- Fair Wages and Safe Working Conditions</li>
              <li>- Minimal Water Usage in Production</li>
              <li>- Recycled and Biodegradable Packaging</li>
              <li>- Local and Ethical Manufacturing</li>
            </ul>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1583336526884-e60c41c8c036?q=80&w=1470&auto=format&fit=crop" 
              alt="Sustainable Fashion" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-serif font-bold mb-6">Join Our Sustainability Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Every purchase supports our mission to create a more sustainable and ethical fashion industry.
          </p>
          <Button size="lg">Learn More About Our Impact</Button>
        </div>
      </div>
    </Layout>
  );
};

export default SustainabilityPage;
