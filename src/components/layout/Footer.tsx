
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted mt-8 sm:mt-12 md:mt-16">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        {/* Newsletter */}
        <div className="max-w-xl mx-auto text-center mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2 sm:mb-3">Subscribe to Updates</h3>
          <p className="mb-4 sm:mb-6 text-muted-foreground text-sm sm:text-base">
            Get the latest updates on our services, available stock, and customer reviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input placeholder="Your email address" type="email" className="sm:flex-1 text-sm sm:text-base h-9 sm:h-10" />
            <Button className="h-9 sm:h-10 text-sm sm:text-base">Subscribe</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 py-6 sm:py-8 border-t border-border">
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <h4 className="font-serif font-bold text-base sm:text-lg mb-3 sm:mb-4">Segula Collection</h4>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
              Providing quality services and products for our customers.
            </p>
            <div className="flex space-x-2 sm:space-x-4">
              <Link to="#" aria-label="Facebook">
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Link to="#" aria-label="Instagram">
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Link to="#" aria-label="Twitter">
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-base sm:text-lg mb-3 sm:mb-4">Navigation</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/our-services" className="hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/available-stock" className="hover:text-primary transition-colors">
                  Available Stock
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-base sm:text-lg mb-3 sm:mb-4">Resources</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/client-reviews" className="hover:text-primary transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link to="/subscribe" className="hover:text-primary transition-colors">
                  Subscribe
                </Link>
              </li>
              <li>
                <Link to="/customer-support" className="hover:text-primary transition-colors">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/customer-support" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:info@segula.com" className="hover:text-primary transition-colors">
                  info@segula.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-border text-center text-xs sm:text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Segula Collection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
