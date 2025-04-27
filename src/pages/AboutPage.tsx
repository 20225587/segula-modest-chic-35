
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Layout>
      <div className="segula-container py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-sm font-medium text-primary mb-2 block">Our Story</span>
          <h1 className="text-4xl font-serif font-bold mb-6">Empowering Modest Fashion</h1>
          <p className="text-lg text-muted-foreground">
            Segula Collection was born from a passion for fashion that respects both personal style and deeply held values.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1488161628538-d0ca8e43c974?q=80&w=1528&auto=format&fit=crop" 
              alt="Segula Founders" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              We believe that modesty is not about limitation, but about empowerment. 
              Our designs celebrate individuality while providing comfort, style, and respect.
            </p>
            <p className="text-muted-foreground mb-4">
              Every piece is carefully crafted with sustainable materials, ethical manufacturing, 
              and a commitment to reducing our environmental impact.
            </p>
            <p className="font-medium italic mb-6">
              "Modesty is not about covering up, but about revealing your true self."
            </p>
            <Button asChild>
              <Link to="/sustainability">Our Sustainable Practices</Link>
            </Button>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Faith-Inspired</h3>
              <p className="text-muted-foreground">
                Our designs reflect our commitment to faith-based principles of dignity and respect.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Sustainable</h3>
              <p className="text-muted-foreground">
                We prioritize eco-friendly materials and ethical manufacturing practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Empowering</h3>
              <p className="text-muted-foreground">
                Our clothing helps women feel confident while staying true to their values.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
