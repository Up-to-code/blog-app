/* eslint-disable no-unused-vars */
import { Link, useResolvedPath } from "react-router-dom";
function NavLinkes() {
  const Path = useResolvedPath();

  return (
    <div className="flex gap-5 text-gray-800">
      <Link to={"/"}>Home</Link>
      <Link to={"/Blog"}>Blog</Link>
      <Link to={"/New"}>New</Link>
      <Link to={"/Pages"}>Pages</Link>
      <Link to={"/Contacet"}>Contacet</Link>
    </div>
  );
}

export default NavLinkes;
