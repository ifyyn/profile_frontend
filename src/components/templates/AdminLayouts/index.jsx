import { Outlet } from "react-router-dom";
import Sidebar from "../../organisms/SidebarAdmin";

const AdminLayouts = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row  gap-6 m-auto">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default AdminLayouts;
