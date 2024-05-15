import { Link } from "react-router-dom";

export default function ButtonPrimary({ children, to }) {
    return (
        <Link to={to} className="">
            <button className="text-white text-[16px]  bg-transparent border-2 border-white px-[42px] py-4 font-semibold">
                {children}
            </button>
        </Link>
    );
}
