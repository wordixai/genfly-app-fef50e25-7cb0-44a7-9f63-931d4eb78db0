import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface PopButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  onClick?: () => void;
}

const PopButton = ({ children, variant = 'primary', className, onClick }: PopButtonProps) => {
  const baseClasses = "font-bold handwritten transform transition-all duration-300 hover:scale-110 active:scale-95 comic-border";
  
  const variantClasses = {
    primary: "bg-pop-yellow text-black hover:bg-white bounce-slow",
    secondary: "bg-white text-pop-pink hover:bg-pop-yellow wiggle",
    accent: "bg-pop-green text-white hover:bg-pop-blue bounce-slow"
  };

  return (
    <button 
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PopButton;