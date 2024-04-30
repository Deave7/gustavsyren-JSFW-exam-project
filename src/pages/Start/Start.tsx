import Header from "../../components/header/Header";


function Start() {
    return ( 
        <div className="start">
            <Header navOne={"/start"} imageOne={"src\\assets\\home.svg"} navTwo={"/user"} imageTwo={"src\\assets\\user.svg"} label={"SHELF"}/>
        </div>
     );
}

export default Start;