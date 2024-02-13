import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import image from "../assets/images/dark-leaf.jpeg";
import kk from "../assets/images/kk.png";
import ButtonOutlined from "../components/ButtonOutlined";
import ButtonPrimary from "../components/ButtonPrimary";
export default function Home() {
  return (
    <div>
      <div className="h-screen hero-section">
        <div className="absolute bg-primary">
          <img
            className="opacity-30 h-screen object-cover "
            src={image}
            alt=""
          />
        </div>
        <div className="relative ">
          <MenuIcon className="text-white" />
          <div className="flex flex-col justify-center items-center text-white">
            <img src={kk} className="transform -scale-x-100 w-64" alt="" />
            <div className="bg-primary py-4">
              <h1 className="text-center font-bold text-4xl">
                Natural Solution For Healthy Life
              </h1>
              <p className="text-xs py-4">
                Let's try our way to get your dream job, with offers from
                different countries and job positions, create opportunities for
                a better life
              </p>
              <div className="m-2 flex justify-center items-center gap-2">
                <ButtonOutlined text={"Order Product"} />
                <ButtonPrimary text={"See Products"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
