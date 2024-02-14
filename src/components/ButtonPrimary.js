import { Link } from "react-router-dom";

export default function ButtonPrimary({ children, to }) {
    return (
        <Link to={to} className="">
            <button className="text-white bg-primary border-2 border-white px-7 py-3 text-xs font-semibold">
                {children}
            </button>
        </Link>
    );
}
