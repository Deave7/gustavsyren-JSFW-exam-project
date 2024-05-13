import { Link, useRouteError } from "react-router-dom";
import Button from "../../components/button/Button";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);


  const onClick = () => {
    
  }

  return (
    <div className="error-page">
      <div>
        <h2>Oops!</h2>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>Press the button to reset the app and return to the home screen</p>
        <Link to={'/home'}><Button className={"button"} label={'Reset'} onClick={onClick}></Button></Link>
      </div>
    </div>
  );
}
