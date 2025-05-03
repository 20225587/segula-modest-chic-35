
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose
} from "@/components/ui/drawer";
import { useSearch } from "@/hooks/use-search";
import ProductCard from "@/components/product/ProductCard";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery, searchResults, handleSearch } = useSearch();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Services", path: "/our-services" },
    { name: "Available Stock", path: "/available-stock" },
    { name: "Blog", path: "/blog" },
    { name: "Client Reviews", path: "/client-reviews" },
    { name: "Subscribe", path: "/subscribe" },
    { name: "Customer Support", path: "/customer-support" },
  ];

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  const handleProductClick = (productId: string) => {
    setIsSearchOpen(false);
    navigate(`/product/${productId}`);
  };

  // Clear search when the search overlay is closed
  useEffect(() => {
    if (!isSearchOpen) {
      setSearchQuery("");
    }
  }, [isSearchOpen, setSearchQuery]);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-3 sm:px-4 h-14 sm:h-16 flex items-center justify-between">
        <div className="md:hidden">
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="sm" className="p-1">
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-[80vh] max-h-[80vh]">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <Link 
                    to="/" 
                    className="text-xl font-serif font-bold tracking-tight"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Segula
                  </Link>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="sm" className="p-1">
                      <X className="h-5 w-5" />
                    </Button>
                  </DrawerClose>
                </div>
              </div>
              <nav className="p-4 overflow-y-auto">
                <div className="space-y-3">
                  {navItems.map((item) => (
                    <Link 
                      key={item.name}
                      to={item.path}
                      className="block py-2 text-base border-b border-border"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>

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
                    value={searchQuery}
                    onChange={handleSearchInput}
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

                {searchQuery.trim() === "" ? (
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
                ) : searchResults.length > 0 ? (
                  <div className="mt-4">
                    <h2 className="text-sm font-medium mb-2">Search Results ({searchResults.length})</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {searchResults.slice(0, 6).map((product) => (
                        <div 
                          key={product.id} 
                          className="cursor-pointer"
                          onClick={() => handleProductClick(product.id)}
                        >
                          <div className="flex items-center gap-2 border rounded-md p-2 hover:bg-accent transition-colors">
                            <div className="h-10 w-10 shrink-0 rounded-md overflow-hidden">
                              <img 
                                src={product.images[0]} 
                                alt={product.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium line-clamp-1">{product.name}</p>
                              <p className="text-xs text-muted-foreground">${product.price.toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {searchResults.length > 6 && (
                      <div className="text-center mt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            navigate(`/available-stock?search=${encodeURIComponent(searchQuery)}`);
                            setIsSearchOpen(false);
                          }}
                        >
                          View all {searchResults.length} results
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No products found matching "{searchQuery}"</p>
                    <Button 
                      variant="link" 
                      onClick={() => navigate("/available-stock")}
                      className="mt-2"
                    >
                      Browse all products
                    </Button>
                  </div>
                )}
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
    </header>
  );
};

export default Header;
