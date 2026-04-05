import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../../img/logoHorizon.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl border-b border-slate-700/50 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <Link
            to="/home"
            className="shrink-0 transform transition-all duration-300 hover:scale-110 hover:drop-shadow-lg active:scale-95"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto brightness-100 hover:brightness-110 transition-all duration-300"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-2 sm:gap-4 lg:gap-6">
            <li>
              <Link
                to="/home"
                className="relative px-3 py-2 text-sm sm:text-base font-medium text-slate-200 transition-all duration-300 hover:text-white active:text-slate-100
                           rounded-lg hover:bg-slate-700/50 active:bg-slate-600
                           before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-linear-to-r before:from-blue-400 before:to-cyan-400 before:transition-all before:duration-300 hover:before:w-full
                           transform hover:translate-y-0 active:translate-y-0.5"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="relative px-3 py-2 text-sm sm:text-base font-medium text-slate-200 transition-all duration-300 hover:text-white active:text-slate-100
                           rounded-lg hover:bg-slate-700/50 active:bg-slate-600
                           before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-linear-to-r before:from-blue-400 before:to-cyan-400 before:transition-all before:duration-300 hover:before:w-full
                           transform hover:translate-y-0 active:translate-y-0.5"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/company"
                className="relative px-3 py-2 text-sm sm:text-base font-medium text-slate-200 transition-all duration-300 hover:text-white active:text-slate-100
                           rounded-lg hover:bg-slate-700/50 active:bg-slate-600
                           before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-linear-to-r before:from-blue-400 before:to-cyan-400 before:transition-all before:duration-300 hover:before:w-full
                           transform hover:translate-y-0 active:translate-y-0.5"
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="relative px-3 py-2 text-sm sm:text-base font-medium text-slate-200 transition-all duration-300 hover:text-white active:text-slate-100
                           rounded-lg hover:bg-slate-700/50 active:bg-slate-600
                           before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-linear-to-r before:from-blue-400 before:to-cyan-400 before:transition-all before:duration-300 hover:before:w-full
                           transform hover:translate-y-0 active:translate-y-0.5"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/new-project"
                className="ml-2 px-4 py-2 text-sm sm:text-base font-semibold text-white bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg
                           transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:from-blue-600 hover:to-cyan-600
                           active:shadow-md active:from-blue-700 active:to-cyan-700
                           transform hover:scale-105 active:scale-95"
              >
                New Project
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
