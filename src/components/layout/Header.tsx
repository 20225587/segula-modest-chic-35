
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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Services", path: "/our-services" },
    { name: "Available Stock", path: "/available-stock" },
    { name: "Blog", path: "/blog" },
    { name: "Client Reviews", path: "/client-reviews" },
    { name: "Subscribe", path: "/subscribe" },
    { name: "Customer Support", path: "/customer-support" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-3 sm:px-4 h-14 sm:h-16 flex items-center justify-between">
        <Button 
          variant="ghost" 
          size="sm"
          className="md:hidden p-1"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="flex items-center">
          <Link to="/" className="text-xl sm:text-2xl font-serif font-bold tracking-tight">
            Segula
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-2 lg:space-x-6 overflow-x-auto text-xs lg:text-sm">
          {navItems.slice(0, 6).map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className="whitespace-nowrap font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          {navItems.length > 6 && (
            <Button variant="ghost" size="sm" asChild className="text-xs lg:text-sm">
              <Link to={navItems[6].path} className="whitespace-nowrap">
                {navItems[6].name}
              </Link>
            </Button>
          )}
        </nav>

        <div className="flex items-center space-x-1 sm:space-x-2">
          {!isSearchOpen ? (
            <Button 
              variant="ghost" 
              size="sm"
              className="p-1"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          ) : (
            <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
              <div className="w-full max-w-2xl">
                <div className="flex items-center mb-4 sm:mb-8">
                  <Input 
                    type="search" 
                    placeholder="Search for products..." 
                    className="flex-1 text-sm"
                    autoFocus
                  />
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setIsSearchOpen(false)}
                    className="ml-2 p-1"
                  >
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
                  {navItems.map((item) => (
                    <Button 
                      key={item.name}
                      variant="outline"
                      className="justify-start text-xs sm:text-sm h-8 sm:h-10"
                      onClick={() => {
                        setIsSearchOpen(false);
                      }}
                      asChild
                    >
                      <Link to={item.path}>{item.name}</Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <Link to="/account">
            <Button variant="ghost" size="sm" className="p-1">
              <User className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>

          <Link to="/cart">
            <Button variant="ghost" size="sm" className="relative p-1">
              <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-primary text-primary-foreground text-[8px] sm:text-[10px] flex items-center justify-center rounded-full">
                2
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 animate-fade-in overflow-y-auto">
          <div className="flex justify-between items-center p-3 sm:p-4 border-b sticky top-0 bg-background">
            <Link 
              to="/" 
              className="text-xl sm:text-2xl font-serif font-bold tracking-tight"
              onClick={() => setIsMenuOpen(false)}
            >
              Segula
            </Link>
            <Button 
              variant="ghost" 
              size="sm"
              className="p-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="p-3 sm:p-4">
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className="block py-2 text-base sm:text-lg border-b border-border"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
