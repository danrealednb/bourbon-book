import { NavLink, Form, useLoaderData, Link } from "@remix-run/react";
import Logo from "~/components/util/Logo";

function MainHeader() {
  const userId = useLoaderData();
  return (
    <header id="main-header">
      <div className="flex justify-center items-center space-x-2">
        <h1 className="text-white text-xl">My Bourbon Book</h1>
        <Logo />
      </div>

      <nav id="main-nav">
        <ul className="flex items-center space-x-1 space-y-5">
          <li className="flex-auto"></li>
          <li className="flex-auto">
            <NavLink
              className="text-xl font-bold underline text-white hover:text-red [&.active]:text-amber"
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li className="flex-auto">
            <NavLink
              to="/brands"
              className="text-xl font-bold underline text-white hover:text-red [&.active]:text-amber"
              end
            >
              Brands
            </NavLink>
          </li>
          <li className="flex-auto">
            <NavLink
              to="/spirits"
              className="text-xl font-bold underline text-white hover:text-red [&.active]:text-amber"
              end
            >
              Spirits
            </NavLink>
          </li>
          <li className="flex-auto">
            <NavLink
              to="/tastings"
              className="text-xl font-bold underline text-white hover:text-red [&.active]:text-amber"
              end
            >
              Tastings
            </NavLink>
          </li>
          <li className="flex-auto">
            <NavLink
              to="/collection"
              className="text-xl font-bold underline text-white hover:text-red [&.active]:text-amber"
              end
            >
              Collection
            </NavLink>
          </li>
          <li className="flex-auto">
            {/* <button className="text-xl font-bold hover:underline text-red hover:text-white [&.active]:text-amber px-1 border-2 rounded">
              
            {userId && <button className="cta-alt">Logout</button>}
              
              
              <Form method="post" id="logout-form" action="logout">
                <button className="cta">Logout</button>
              </Form>
            </button> */}
            <Form method="post" id="logout-form" action="/logout">
              {userId && (
                <button className="text-yellow px-2 border-4 rounded">
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
  );
}

export default MainHeader;
