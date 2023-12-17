import Max from "../layout/Contaniner";
import Logo from "../ui/Logo"
import NavLinkes from "../ui/NavLinkes";
import SerchIcone from "../../assets/search-outline.png"
function Navbar() {
  return (

<>

<header className="w-full flex h-14   ">
   <Max>
    <nav className="h-full flex items-center  justify-between ">
      <Logo/>
      <NavLinkes/>
      <img src={SerchIcone} alt="" />
    </nav>
   </Max>
</header>
</>


  );
}

export default Navbar;
