
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implement form submission logic
  };

  return (
    <Layout>
      <div className="segula-container py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-serif font-bold mb-6">Contact Us</h1>
            <p className="text-muted-foreground mb-8">
              Have questions or want to collaborate? We'd love to hear from you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                placeholder="Your Name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
              <Input 
                type="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
              <Textarea 
                placeholder="Your Message" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required 
              />
              <Button type="submit" size="lg" className="w-full">Send Message</Button>
            </form>
          </div>

          <div>
            <div className="bg-muted/50 rounded-lg p-8 mb-8">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-4 h-6 w-6 text-primary" />
                  <span>info@segulacollection.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4 h-6 w-6 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-4 h-6 w-6 text-primary" />
                  <span>123 Modest Lane, Faith City, FC 12345</span>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-8">
              <h2 className="text-xl font-bold mb-4">Business Hours</h2>
              <div className="space-y-2">
                <p>Monday - Friday: 9am - 5pm EST</p>
                <p>Saturday: 10am - 2pm EST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
