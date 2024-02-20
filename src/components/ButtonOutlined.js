import { Link } from "react-router-dom";

export default function ButtonOutlined({ children, to }) {
  return (
      <Link to={to} className="">
          <button className="text-primary bg-white px-10 py-4 font-bold">
              {children}
          </button>
      </Link>
  );
}
