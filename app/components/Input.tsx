import { InputHTMLAttributes } from "react";

interface InputProps {
  children: React.ReactNode;
  type: string;
  name: string;
  value: string;
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
}
const Input: React.FC<InputProps> = ({ children, type, name, value, onChange}) => {
  return (
    <div className="flex flex-col my-2">
      <label className="text-gray-600 font-sans">{children} </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="text-black bg-[#f5f6f9] focus:outline-none my-2"
        required
      />
      <div className="border-t border-gray-200"></div>
    </div>
  );
};

export default Input;
