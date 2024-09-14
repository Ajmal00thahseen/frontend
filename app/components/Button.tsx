const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="text-white px-2 py-2 w-20 rounded-full bg-[#0279fb] hover:text-[#0279fb] hover:bg-white active:bg-gray-800 font-sans">
      {children}
    </button>
  );
};

export default Button;
