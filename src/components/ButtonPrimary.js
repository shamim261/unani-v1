import { Link } from "react-router-dom";

export default function ButtonPrimary({ children, to }) {
    return (
        <Link to={to} className="">
            <button className="text-white bg-transparent border-2 border-white px-10 py-4  font-semibold">
                {children}
            </button>
        </Link>
    );
}
