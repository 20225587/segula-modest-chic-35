
import { Leaf, Truck, Heart, RefreshCcw } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco Friendly",
      description: "Sustainable materials and ethical manufacturing practices."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Faith Inspired",
      description: "Designs that reflect Christian values and modesty."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Shipping",
      description: "On all U.S. orders over $75."
    },
    {
      icon: <RefreshCcw className="w-6 h-6" />,
      title: "Easy Returns",
      description: "30-day hassle-free return policy."
    }
  ];
  
  return (
    <div className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              <div className="mb-3 text-primary">{value.icon}</div>
              <h3 className="font-serif font-bold mb-1">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
