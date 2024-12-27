const Container = ({ children, name }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-[840px]">
      <h2 className="text-3xl font-bold text-dark w-48 border-b-2 border-green p-1">
        {name}
      </h2>
      {children}
    </div>
  );
};
export default Container;
