import { Link } from "react-router-dom";

export default function ButtonOutlined({ children, to }) {
  return (
      <Link to={to} className="">
          <button className="text-primary bg-white px-7 py-3 text-xs font-semibold">
              {children}
          </button>
      </Link>
  );
}
