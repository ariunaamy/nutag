import { useRouteError } from "react-router-dom";
import "./Error.scss";

type ErrorType = {
    statusText?: string;
    message?: string;
  }

const Error = () => {
const error = useRouteError() as ErrorType | null;

  console.error(error);


    return (
                <div id="error-page">
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                      { error ?  <i>{error.statusText || error.message}</i> : null}
                    </p>
                </div>
            );
        };

        export default Error;



