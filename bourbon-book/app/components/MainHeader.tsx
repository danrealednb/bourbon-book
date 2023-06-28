import { NavLink, Form } from "@remix-run/react";

function MainHeader() {
  return (
    <header id="main-header">
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/brands" end>
              Brands
            </NavLink>
          </li>
          <li>
            <NavLink to="/spirits" end>
              Spirits
            </NavLink>
          </li>
          <li>
            <NavLink to="/tastings" end>
              Tastings
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <nav id="cta-nav">
        <Form method="post" action="logout">
          <button className="cta">Logout</button>
        </Form>
      </nav> */}
    </header>
  );
}

export default MainHeader;
