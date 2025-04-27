
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionHeading = ({
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-3xl", alignmentClasses[align], className)}>
      <h2 className="segula-heading">{title}</h2>
      {description && (
        <p className="segula-subheading mt-3">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
