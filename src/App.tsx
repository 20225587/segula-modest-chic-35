
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";

// New Pages
import OurServicesPage from "./pages/OurServicesPage";
import AvailableStockPage from "./pages/AvailableStockPage";
import BlogPage from "./pages/BlogPage";
import ClientReviewsPage from "./pages/ClientReviewsPage";
import SubscribePage from "./pages/SubscribePage";
import CustomerSupportPage from "./pages/CustomerSupportPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/our-services" element={<OurServicesPage />} />
            <Route path="/available-stock" element={<AvailableStockPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/client-reviews" element={<ClientReviewsPage />} />
            <Route path="/subscribe" element={<SubscribePage />} />
            <Route path="/customer-support" element={<CustomerSupportPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
