"use client";
import { FC } from "react";

type IconButtonProps = {
  icon: React.ElementType;
  onClick?: () => void;
  className?: string;
  color?: string;
  size?: string;
};

const IconButton: FC<IconButtonProps> = ({
  icon: Icon,
  onClick,
  className,
  color = "text-gray-500",
  size = "h-5 w-5",
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full p-1.5 cursor-pointer ${className}`}
    >
      <Icon className={`${size} ${color}`} />
    </button>
  );
};

export default IconButton;
