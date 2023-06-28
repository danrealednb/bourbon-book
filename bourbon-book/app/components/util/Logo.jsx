import { Link } from "@remix-run/react";
import {FaGlassWhiskey} from 'react-icons/fa'

function Logo() {
  return (
    <h1 id="logo">
      <Link to="/" className="grid justify-center items-center text-white py-5"><FaGlassWhiskey size="2rem"/></Link>
    </h1>
  );
}

export default Logo;
