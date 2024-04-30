import Header from "../../components/header/Header";


function Root() {
    return ( 
        <div className="start">
            <Header navOne={"/"} imageOne={"src\\assets\\home.svg"} navTwo={"/user"} imageTwo={"src\\assets\\user.svg"} label={"SHELF"}/>
        </div>
     );
}

export default Root;