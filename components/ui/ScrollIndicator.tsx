import React from "react";

type ScrollIndicatorProps = {
  targetId?: string;
  className?: string;
};

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  targetId = "services",
  className = "",
}) => {
  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`flex flex-col items-center cursor-pointer animate-bounce ${className}`}
      onClick={handleScroll}
    >
      <span className="text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
        Scroll
      </span>
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
};

export default ScrollIndicator; 