/* eslint-disable no-unused-vars */
import Logo2 from "../../../assets/Logo2.png"
import MetaBlog from "../../../assets/MetaBlog.png"
function openNewTab(url) {
  window.open(url, '_blank');
}

function Rights() {
  
  return (
    <div className="flex justify-between my-5 py-5 px-3 border-t">

      <div className="flex items-center gap-4">
        <img src={Logo2} alt="" />
        <div className="">
          <img src={MetaBlog} alt="Logo" />
          <p>
            © Up-to-code  2023. All Rights Reserved.
          </p>
        </div>
      </div>

      <p className="text-zinc-800 cursor-pointer"onClick={()=>{openNewTab("https://github.com/Up-to-code")}}>
  
 Github
      </p>
    </div>
  )
}

export default Rights