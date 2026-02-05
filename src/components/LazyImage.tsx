import { useState } from "react";
import { cn } from "../utils/cn";

const LazyImage = ({ src, alt, className }: {src: string, alt:string, className:string}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* The Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "transition-all duration-700 ease-in-out object-cover h-full",
          isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-lg scale-105"
        )}
      />
    </div>
  );
};

export default LazyImage;