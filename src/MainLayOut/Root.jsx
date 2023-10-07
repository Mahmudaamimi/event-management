import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-3">
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;