import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../../organisms";

const Layouts = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row p-6 gap-6 m-auto">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layouts;
