import { NavLink } from "@remix-run/react";

const NavBar = () => {
  return (
    <>
      <nav className="mx-16 my-4">
        <ul className="list-none flex">
          <li className="uppercase">
            <NavLink to="/" className="flex">
                <img src="/csu-logo.png" alt="" width="5%" />
                <span className="ml-1">csu lautech</span>
                </NavLink>
          </li>
          <div className="flex ml-auto gap-8">
            <li>
              <NavLink to="/activities" className="hover:text-csu-blue">
                Activities
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-csu-blue">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className="hover:text-csu-blue">
                Renovation Project
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
      <hr className="opacity-10" />
    </>
  );
};

export default NavBar;
