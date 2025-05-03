
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!product) {
    return <Layout><div className="segula-container py-8">Product not found</div></Layout>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      image: product.images[0]
    });
    navigate('/cart');
  };

  return (
    <Layout>
      <div className="segula-container py-6 sm:py-8 md:py-12 grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
        <div>
          <div className="aspect-[3/4] mb-3 sm:mb-4">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="w-full h-full object-cover rounded-lg"
              loading="eager"
            />
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {product.images.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${product.name} preview ${index + 1}`} 
                className={`w-full aspect-square object-cover rounded-lg cursor-pointer 
                  ${selectedImage === index ? 'border-2 border-primary' : ''}`}
                onClick={() => setSelectedImage(index)}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-3 sm:mb-4">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary mr-3 sm:mr-4">
              {formatCurrency(product.salePrice || product.price)}
            </p>
            {product.salePrice && (
              <p className="text-sm sm:text-base text-muted-foreground line-through">
                {formatCurrency(product.price)}
              </p>
            )}
          </div>

          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{product.description}</p>

          <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4 mb-4 sm:mb-6">
            <Button size="sm" className="w-full sm:flex-1 text-sm sm:text-base h-9 sm:h-10" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Add to Cart
            </Button>
            <Button variant="outline" size="sm" className="w-full sm:w-auto text-sm sm:text-base h-9 sm:h-10">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="ml-2 sm:hidden">Add to Wishlist</span>
            </Button>
          </div>

          <div className="text-sm sm:text-base">
            <h3 className="font-serif font-bold mb-2">Product Details</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              {product.tags.map(tag => (
                <li key={tag} className="capitalize">{tag} Product</li>
              ))}
              <li>Category: {product.category}</li>
              <li>Availability: {product.inStock ? 'In Stock' : 'Out of Stock'}</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
