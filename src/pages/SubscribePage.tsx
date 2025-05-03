
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const SubscribePage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setSubscribed(true);
      setEmail("");
      setName("");
    }
  };

  return (
    <Layout>
      <div className="segula-container py-8 sm:py-12 md:py-16">
        <SectionHeading 
          title="Subscribe" 
          description="Stay updated with our latest news, products, and offers"
        />

        <div className="max-w-md mx-auto mt-8 sm:mt-12">
          {subscribed ? (
            <div className="text-center p-6 sm:p-8 border rounded-lg bg-card">
              <h3 className="text-lg sm:text-xl font-serif font-bold mb-2 sm:mb-3">Thank You for Subscribing!</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                You've been successfully added to our mailing list. Look out for our updates in your inbox.
              </p>
              <Button 
                className="mt-6" 
                onClick={() => setSubscribed(false)}
              >
                Subscribe Another Email
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="border rounded-lg p-6 sm:p-8 bg-card shadow-sm">
              <div className="space-y-4 sm:space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    type="text" 
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-xs sm:text-sm leading-tight">
                    I agree to receive marketing emails and can unsubscribe at any time
                  </Label>
                </div>
              </div>
              
              <Button type="submit" className="w-full mt-6">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SubscribePage;
