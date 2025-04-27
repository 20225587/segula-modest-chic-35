
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Heart, ShoppingCart } from "lucide-react";

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return <Layout><div>Product not found</div></Layout>;
  }

  return (
    <Layout>
      <div className="segula-container py-12 grid md:grid-cols-2 gap-12">
        <div>
          <div className="aspect-[3/4] mb-4">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${product.name} preview ${index + 1}`} 
                className={`w-full aspect-square object-cover rounded-lg cursor-pointer 
                  ${selectedImage === index ? 'border-2 border-primary' : ''}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-serif font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            <p className="text-2xl font-bold text-primary mr-4">
              {formatCurrency(product.salePrice || product.price)}
            </p>
            {product.salePrice && (
              <p className="text-muted-foreground line-through">
                {formatCurrency(product.price)}
              </p>
            )}
          </div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="flex space-x-4 mb-6">
            <Button size="lg" className="flex-1">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          <div>
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
