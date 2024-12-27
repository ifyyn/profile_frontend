const CardSkill = ({ skillName }) => {
  return (
    <div className="group relative bg-gray-300 rounded-lg shadow-md hover:shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-30  pointer-events-none"></div>

      {/* Skill Name */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <h3 className="text-sm font-semibold p-2 text-dark">{skillName}</h3>
      </div>

      {/* Decorative Border */}
      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-green transition-all duration-300"></div>
    </div>
  );
};
export default CardSkill;
