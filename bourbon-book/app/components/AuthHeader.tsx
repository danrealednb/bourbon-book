import Logo from "~/components/util/Logo";
import { Link, NavLink, useLoaderData, Form } from "@remix-run/react";

function MainHeader() {
  const userId = useLoaderData();
  return (
    <header id="main-header">
      <div className="flex justify-center items-center space-x-2">
        <h1 className="text-white text-xl">My Bourbon Book</h1>
        <Logo />
      </div>
      {/* <nav id="main-nav">
        <ul className="flex space-x-1 space-y-5">
          <li className="flex-auto" />
          <li className="flex-auto">
            <NavLink
              to="/"
              className="text-xl font-bold hover:underline text-white hover:text-red [&.active]:text-amber"
            >
              Home
            </NavLink>
          </li>
          <li className="flex-auto">
            <Form method="post" id="logout-form" action="/logout">
              {userId && <button className="cta-alt">Logout</button>}
            </Form>
            {!userId && (
              <Link
                to="/auth"
                className="text-xl font-bold hover:underline text-white hover:text-red [&.active]:text-amber"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

export default MainHeader;
