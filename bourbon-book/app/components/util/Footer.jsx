import { Link } from "@remix-run/react";

function Footer() {
    const year = new Date().getFullYear();

  return (
    <div id="logo" style={{textAlign: "center"}}>
    {`Copyright © ${year} `}
      {<Link to="/">My Bourbon Book</Link>}
    </div>
  );
}

export default Footer;
