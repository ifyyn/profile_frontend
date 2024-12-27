const Section = ({ children, name, className }) => {
  return (
    <section className="mt-6">
      <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
      <div className={` mt-4 ${className}`}>{children}</div>
    </section>
  );
};
export default Section;
