import React from "react";

type SectionDividerProps = {
  variant?: "wave" | "gradient" | "dots" | "angled";
  color?: string;
  backgroundColor?: string;
  className?: string;
};

const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = "gradient",
  color = "primary",
  backgroundColor,
  className = "",
}) => {
  const getColorClass = (colorName: string) => {
    switch (colorName) {
      case "primary":
        return "from-primary to-primary/20";
      case "white":
        return "from-white to-white/20";
      case "dark":
        return "from-gray-800 to-gray-800/20";
      default:
        return "from-primary to-primary/20";
    }
  };

  const getBackgroundColorClass = (bgColor?: string) => {
    if (!bgColor) return "";
    switch (bgColor) {
      case "white":
        return "bg-white";
      case "light":
        return "bg-gray-50";
      case "dark":
        return "bg-[#151934]";
      default:
        return "";
    }
  };

  const gradientColors = getColorClass(color);
  const bgClass = getBackgroundColorClass(backgroundColor);
  
  switch (variant) {
    case "wave":
      return (
        <div className={`relative h-20 overflow-hidden ${bgClass} ${className}`}>
          <svg
            className="absolute bottom-0 w-full text-white dark:text-[#0e1330]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,208C672,213,768,171,864,154.7C960,139,1056,149,1152,149.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      );
    
    case "angled":
      return (
        <div className={`relative h-20 ${bgClass} ${className}`}>
          <svg 
            className="absolute bottom-0 w-full text-white dark:text-[#0e1330]"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path 
              fill="currentColor" 
              fillOpacity="1" 
              d="M0,160L1440,32L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      );
      
    case "dots":
      return (
        <div className={`relative py-8 ${bgClass} ${className}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-screen-xl mx-auto flex justify-center">
              <div className="flex space-x-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-2 rounded-full bg-primary opacity-${
                      70 - i * 10
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
      
    case "gradient":
    default:
      return (
        <div className={`relative w-full py-6 ${className}`}>
          <div
            className={`h-px w-full max-w-7xl mx-auto dark:opacity-60 ${
              color === "primary" 
                ? "bg-gradient-to-r from-primary/70 via-primary to-primary/70 dark:from-primary/40 dark:via-primary/70 dark:to-primary/40" 
                : `bg-gradient-to-r ${gradientColors}`
            }`}
          ></div>
        </div>
      );
  }
};

export default SectionDivider; 