import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectLoggedInUser } from "../auth/authSlice";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Write", href: "#" },
];

export default function Navbar() {
  const user = useSelector(selectLoggedInUser);
  return (
    <>
    
      <header className="bg-white-600 h-[70px] border-b shadow-md">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none h-[70px]">
            <div className="flex items-center ">
              <Link to={"/"} className="flex justify-center items-center">
                <img
                  className="h-10 w-auto rounded-full border"
                  src="https://tailwindui.com/img/logos/mark.svg?color=black"
                  alt=""
                />
                <span className="font-extrabold text-xl border px-2 border-l-0">
                  Blog
                </span>
              </Link>
            </div>

            <div className="ml-10 space-x-6 flex justify-center items-center">
              <Link to={"/"} className="text-base font-medium text-black ">
                Home
              </Link>
              <Link
                to={"/create-post"}
                className="text-base font-medium text-black "
              >
                Write
              </Link>
              <Link
                to={"/login"}
                className="inline-block rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base font-medium text-white hover:bg-opacity-75"
              >
                Sign in
              </Link>
              <Link
                to={"/signup"}
                className="inline-block rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Sign up
              </Link>
              {/* <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
        </div> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
