const Button = ({ children, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-green text-gray-300 rounded-md shadow-md font-semibold px-4 py-2 mt-14 w-full"
    >
      {children}
    </button>
  );
};
export default Button;
