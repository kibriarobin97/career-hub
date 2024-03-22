import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen my-auto space-y-5">
            <h3>Oops!! Content not found</h3>
            <Link to='/'><button className="btn btn-error">Go Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;