
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CustomerSupportPage = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMessageSent(true);
  };

  const faqs = [
    {
      question: "What are your business hours?",
      answer: "Our customer support team is available Monday through Friday from 9:00 AM to 5:00 PM Eastern Time."
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order by logging into your account and viewing your order history, or by using the tracking number provided in your shipping confirmation email."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase. Items must be in their original condition with all tags attached. Please contact our customer support team to initiate a return."
    },
    {
      question: "How can I change or cancel my order?",
      answer: "If you need to change or cancel your order, please contact our customer support team as soon as possible. We can usually accommodate changes if the order has not yet been processed for shipping."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to select countries. Shipping rates and delivery times vary based on destination."
    }
  ];

  return (
    <Layout>
      <div className="segula-container py-8 sm:py-12 md:py-16">
        <SectionHeading 
          title="Customer Support" 
          description="We're here to help with any questions or concerns"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-8 sm:mt-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <h2 className="text-lg sm:text-xl font-serif font-bold mb-4">Contact Us</h2>
            
            {isMessageSent ? (
              <div className="border rounded-lg p-6 bg-card text-center">
                <h3 className="text-lg font-medium mb-2">Thank You!</h3>
                <p className="text-muted-foreground mb-4">
                  Your message has been sent. We'll get back to you as soon as possible.
                </p>
                <Button onClick={() => setIsMessageSent(false)}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Subject of your inquiry" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?" 
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full sm:w-auto">
                  Submit Message
                </Button>
              </form>
            )}
          </div>
          
          {/* FAQs */}
          <div className="order-1 lg:order-2">
            <h2 className="text-lg sm:text-xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <Collapsible key={index} className="border rounded-lg overflow-hidden">
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 font-medium text-left text-sm sm:text-base">
                    {faq.question}
                    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pb-4 pt-0 text-sm text-muted-foreground">
                    {faq.answer}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerSupportPage;
