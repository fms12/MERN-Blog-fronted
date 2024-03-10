import { Link } from "react-router-dom";

const navigation = [
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Docs", href: "#" },
  { name: "Company", href: "#" },
];

export default function Navbar() {
  return (
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

          <div className="ml-10 space-x-4 flex justify-center items-center">
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-black hover:text-gray-900-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
