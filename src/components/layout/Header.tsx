
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = useIsMobile();

  const categories = [
    { name: "Dresses", path: "/categories/dresses" },
    { name: "Tops", path: "/categories/tops" },
    { name: "Bottoms", path: "/categories/bottoms" },
    { name: "Outerwear", path: "/categories/outerwear" },
    { name: "Accessories", path: "/categories/accessories" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      {/* Main header content */}
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight">
            Segula
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {categories.map((category) => (
            <Link 
              key={category.name}
              to={category.path}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {!isSearchOpen ? (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
          ) : (
            <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
              <div className="w-full max-w-2xl">
                <div className="flex items-center mb-8">
                  <Input 
                    type="search" 
                    placeholder="Search for products..." 
                    className="flex-1"
                    autoFocus
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsSearchOpen(false)}
                    className="ml-2"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categories.map((category) => (
                    <Button 
                      key={category.name}
                      variant="outline"
                      className="justify-start"
                      onClick={() => {
                        setIsSearchOpen(false);
                      }}
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <Link to="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>

          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] flex items-center justify-center rounded-full">
                2
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 animate-fade-in">
          <div className="flex justify-between items-center p-4 border-b">
            <Link to="/" className="text-2xl font-serif font-bold tracking-tight">
              Segula
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="p-4">
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    to={category.path}
                    className="block py-2 text-lg border-b border-border"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/about"
                  className="block py-2 text-lg border-b border-border"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="block py-2 text-lg border-b border-border"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
