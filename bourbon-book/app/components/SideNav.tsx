import { NavLink, Form, useLoaderData, Link } from "@remix-run/react";
import Logo from "~/components/util/Logo";
import { FaBars, FaArrowsAltV } from "react-icons/fa";
import { useState } from "react";

function SideNav() {
  const userId = useLoaderData();

  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open);
  };

  return (
    <>
      <div className="flex justify-center items-center space-x-2">
        <h1 className="text-white text-xl">My Bourbon Book</h1>
        <Logo />
      </div>
      <div className="flex justify-center items-center text-white ">
        <button
          // className="flex justify-end px-10 py-10 text-white"
          onClick={toggleOpen}
        >
          {open && <FaArrowsAltV className="text-amber" />}
          {!open && <FaBars className="text-amber" />}
        </button>
      </div>

      {open && (
        <header>
          <nav
            id="main-nav"
            className="flex items-center justify-center items-center pb-5"
          >
            <ul className="flex items-center space-x-5 space-y-5 underline text-white">
              <li className="flex-auto"></li>
              <li className="flex-auto">
                <NavLink
                  className="text-xl font-bold hover:underline text-white hover:text-red [&.active]:text-amber"
                  to="/"
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="flex-auto">
                <NavLink
                  to="/brands"
                  className="text-xl font-bold hover:underline text-white hover:text-red [&.active]:text-amber"
                  end
                >
                  Brands
                </NavLink>
              </li>
              <li className="flex-auto">
                <NavLink
                  to="/spirits"
                  className="text-xl font-bold hover:underline text-white hover:text-red [&.active]:text-amber"
                  end
                >
                  Spirits
                </NavLink>
              </li>
              <li className="flex-auto">
                <NavLink
                  to="/tastings"
                  className="text-xl font-bold hover:underline text-white hover:text-red [&.active]:text-amber"
                  end
                >
                  Tastings
                </NavLink>
              </li>
              <li className="flex-auto">
                <NavLink
                  to="/collection"
                  className="text-xl font-bold hover:underline text-white hover:text-red [&.active]:text-amber"
                  end
                >
                  Collection
                </NavLink>
              </li>
              <li className="flex-auto">
                <Form method="post" id="logout-form" action="/logout">
                  {userId && (
                    <button className="text-yellow font-bold text-xl rounded underline">
                      Logout
                    </button>
                  )}
                </Form>
                {!userId && (
                  <Link to="/auth" className="cta">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
}

export default SideNav;
