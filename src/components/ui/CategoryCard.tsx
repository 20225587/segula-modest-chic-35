
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  name: string;
  image: string;
  link: string;
  className?: string;
}

const CategoryCard = ({ name, image, link, className }: CategoryCardProps) => {
  return (
    <Link
      to={link}
      className={cn(
        "group relative block overflow-hidden rounded-lg aspect-[3/4]",
        className
      )}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
        <div>
          <h3 className="text-xl font-serif font-bold text-white mb-1">{name}</h3>
          <span className="inline-flex items-center text-sm text-white/90 font-medium">
            Shop Now
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
