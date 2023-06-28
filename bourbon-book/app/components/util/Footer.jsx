import { Link } from "@remix-run/react";

function Footer() {
    const year = new Date().getFullYear();

  return (
    <div id="logo" style={{textAlign: "center"}} className="pt-10 pb-5 text-white">
    {`Copyright © ${year} `}
      {<Link to="/" className="underline text-dark-blue">My Bourbon Book</Link>}
    </div>
  );
}

export default Footer;
