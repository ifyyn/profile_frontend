const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green text-gray-300 rounded-md shadow-md font-semibold px-4 py-2 mt-14 w-full"
    >
      {children}
    </button>
  );
};
export default Button;
