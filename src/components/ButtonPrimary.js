import { Link } from "react-router-dom";

export default function ButtonPrimary({ text, to }) {
  return (
    <Link to={to} className="">
      <button className="text-white bg-primary border-2 border-white px-[42px] py-[16px] text-xs font-semibold">
        {text}
      </button>
    </Link>
  );
}
