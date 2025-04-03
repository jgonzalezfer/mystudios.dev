"use client";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

const ScrollUp = () => {
  return (
    <Link
      href="/#home"
      className="fixed bottom-[30px] right-[30px] z-[999] flex h-[50px] w-[50px] items-center justify-center rounded-[5px] bg-primary text-white shadow-md duration-300 hover:bg-dark"
    >
      <Icon name="ChartBarIcon" size={24} className="rotate-180" />
    </Link>
  );
};

export default ScrollUp; 