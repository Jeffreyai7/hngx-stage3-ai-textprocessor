import cn from "../lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, className, onClick, type }: ButtonProps) => {
  return (
    <>
      <button className={cn(className)} onClick={onClick} type={type}>
        {children}
      </button>
    </>
  );
};

export default Button;
