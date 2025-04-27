
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="segula-container py-16 md:py-24">
        <div className="max-w-md mx-auto text-center">
          <h1 className="segula-heading mb-4">Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            We couldn't find the page you're looking for. The page might have been moved, deleted, or never existed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/">Return to Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
