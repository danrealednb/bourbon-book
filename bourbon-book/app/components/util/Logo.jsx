import { Link } from "@remix-run/react";
import {FaHome} from 'react-icons/fa'

function Logo() {
  return (
    <h1 id="logo">
      <Link to="/"><FaHome size="2rem"/></Link>
    </h1>
  );
}

export default Logo;
