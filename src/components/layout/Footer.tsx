
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-serif font-bold mb-3">Join Our Community</h3>
          <p className="mb-6 text-muted-foreground">
            Subscribe to our newsletter for exclusive offers, modesty style tips, and updates on our sustainable practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input placeholder="Your email address" type="email" className="sm:flex-1" />
            <Button>Subscribe</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-t border-border">
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Segula Collection</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Embracing modesty and sustainability in fashion, inspired by faith and commitment to ethical practices.
            </p>
            <div className="flex space-x-4">
              <Link to="#" aria-label="Facebook">
                <Button variant="ghost" size="icon">
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="#" aria-label="Instagram">
                <Button variant="ghost" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="#" aria-label="Twitter">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/categories/dresses" className="hover:text-primary transition-colors">
                  Dresses
                </Link>
              </li>
              <li>
                <Link to="/categories/tops" className="hover:text-primary transition-colors">
                  Tops
                </Link>
              </li>
              <li>
                <Link to="/categories/bottoms" className="hover:text-primary transition-colors">
                  Bottoms
                </Link>
              </li>
              <li>
                <Link to="/categories/outerwear" className="hover:text-primary transition-colors">
                  Outerwear
                </Link>
              </li>
              <li>
                <Link to="/categories/accessories" className="hover:text-primary transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-primary transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/ethical-practices" className="hover:text-primary transition-colors">
                  Ethical Practices
                </Link>
              </li>
              <li>
                <Link to="/faith-values" className="hover:text-primary transition-colors">
                  Faith Values
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
            <h4 className="font-serif font-bold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-primary transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="hover:text-primary transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Segula Collection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
