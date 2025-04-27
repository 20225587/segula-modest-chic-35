
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative">
      {/* Product Image */}
      <div className="aspect-[2/3] rounded-md overflow-hidden bg-muted relative">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.new && (
            <Badge className="bg-primary text-white">New</Badge>
          )}
          {product.salePrice && (
            <Badge className="bg-destructive text-white">Sale</Badge>
          )}
        </div>
        
        {/* Quick actions */}
        <div className="absolute top-2 right-2">
          <Button 
            variant="secondary" 
            size="icon" 
            className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Quick add to cart (optional) */}
        <div className="absolute inset-x-0 bottom-0 bg-background/80 backdrop-blur-sm py-2 px-4 translate-y-full group-hover:translate-y-0 transition-transform">
          <Button className="w-full" variant="outline">
            Add to Cart
          </Button>
        </div>
      </div>
      
      {/* Product details */}
      <div className="mt-3">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-sm font-medium">{product.name}</h3>
        </Link>
        <div className="flex items-center mt-1">
          {product.salePrice ? (
            <>
              <span className="text-sm font-medium text-destructive">
                {formatCurrency(product.salePrice)}
              </span>
              <span className="ml-2 text-xs text-muted-foreground line-through">
                {formatCurrency(product.price)}
              </span>
            </>
          ) : (
            <span className="text-sm font-medium">
              {formatCurrency(product.price)}
            </span>
          )}
        </div>
        
        {/* Product tags */}
        <div className="mt-2 flex flex-wrap gap-1">
          {product.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-[10px] py-0">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
