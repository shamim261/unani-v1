import { Link } from "react-router-dom";

export default function ButtonOutlined({ text, to }) {
  return (
    <Link to={to} className="">
      <button className="text-primary bg-white px-[42px] py-[16px] text-xs font-semibold">
        {text}
      </button>
    </Link>
  );
}
