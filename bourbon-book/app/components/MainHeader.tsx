import { NavLink, Form } from "@remix-run/react";
import Logo from "~/components/util/Logo";
function MainHeader() {
  return (
    <header id="main-header">
      <div className="flex justify-center items-center space-x-2">
        <h1 className="text-white text-xl">My Bourbon Book</h1>
        <Logo />
      </div>

      <nav id="main-nav">
        <ul className="flex space-x-1 space-y-5">
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
            <button className="text-xl font-bold hover:underline text-red hover:text-white [&.active]:text-amber px-1 border-2 rounded">
              <Form method="post" id="logout-form" action="logout">
                <button className="cta">Logout</button>
              </Form>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
