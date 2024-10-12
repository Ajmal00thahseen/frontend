import { ButtonHTMLAttributes} from "react";

interface ButtonProps {
  children: React.ReactNode;
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}
const Button : React.FC<ButtonProps> = ({ children , type}) => {
  return (
    <button type={type} className="text-white px-2 py-2 w-20 rounded-full bg-[#0279fb] hover:text-[#0279fb] hover:bg-white font-sans">
      {children}
    </button>
  );
};

export default Button;
