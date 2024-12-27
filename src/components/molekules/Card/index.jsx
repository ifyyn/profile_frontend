import { Link } from "react-router-dom";

const Card = ({ title, description, src, alt, className, degree }) => {
  return (
    <div
      className={`bg-[#F2F7FC] max-w-sm p-4 rounded-md shadow-sm animate-fadeIn ${className}`}
    >
      <img className="w-full object-cover rounded-s-md" src={src} alt={alt} />

      <h4 className="text-base md:text-lg lg:text-lg font-semibold text-green">
        {title}
      </h4>
      <p className="text-gray-700">{degree}</p>
      <p className="text-gray-700 text-xs md:text-sm lg:text-sm">
        {description}
      </p>
    </div>
  );
};
export default Card;
