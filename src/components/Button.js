import { Link } from "react-router-dom";

export default function Button({ children, to }) {
    return (
        <Link to={to} className="">
            <button className="text-white bg-[#18BA6C] border-2 border-white px-10 py-4 ">
                {children}
            </button>
        </Link>
    );
}
