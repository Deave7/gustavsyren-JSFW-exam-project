import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";


function Root() {
    return ( 
        <div className="root">
            <Header navOne={"/home"} imageOne={"src\\assets\\home.svg"} navTwo={"/user"} imageTwo={"src\\assets\\user.svg"} label={"SHELF"}/>
            <Outlet/>
        </div>
     );
}

export default Root;