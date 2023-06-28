import { Link } from "@remix-run/react";
import { FaGlassWhiskey } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-5">
      <div
        id="logo"
        style={{ textAlign: "center" }}
        className="text-white flex justify-center"
      >
        <p>{`Copyright © ${year} `}</p>
        <div className="px-1"></div>
        <Link to="/" className="underline text-white">
          My Bourbon Book{" "}
        </Link>
      </div>
      <div></div>
      <div className="text-white flex justify-center items-center py-5">
        <FaGlassWhiskey size="2rem" />
      </div>
    </footer>
  );
}

export default Footer;
