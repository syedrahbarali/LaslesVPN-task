import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const Home = () => {
  let [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div className="w-[70vw] h-[100px] flex items-center justify-between m-auto">
        <img src={logo} className="" />

        <nav className="hidden xl:flex gap-10">
          {["About", "Feature", "Pricing", "Testimonials", "Help"].map(
            (item) => {
              return (
                <NavLink className="hover:text-gray-600" to="">
                  {item}
                </NavLink>
              );
            }
          )}
        </nav>

        <div className="flex gap-5 items-center">
          <button className="w-[70px] font-semibold">Sign in</button>
          <button className="text-[#F53855] w-[150px] h-[45px] border-2 border-[#F53855] border-solid rounded-full font-semibold">
            Sign up
          </button>
          {isClicked ? (
            <CgClose
              onClick={() => setIsClicked(!isClicked)}
              className="xl:hidden cursor-pointer text-3xl"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setIsClicked(!isClicked)}
              className="xl:hidden cursor-pointer text-3xl"
            />
          )}
        </div>
      </div>

      <div
        className={`w-[70vw] transition-all ${
          isClicked ? "block" : "hidden"
        } m-auto text-center font-medium`}
      >
        {["About", "Feature", "Pricing", "Testimonials", "Help"].map((item) => {
          return (
            <NavLink className="hover:text-gray-600 block p-3" to="">
              {item}
            </NavLink>
          );
        })}
      </div>

      <Outlet />
    </>
  );
};

export default Home;