/* eslint-disable react/prop-types */


function Input({ children }) {
    return (
        <div className="flex relative w-max ">
            <input placeholder="Your Email" type="text" className="outline-none border py-1 px-4 w-[250px] " />
            <p className="absolute right-1 top-2 ">

                {children}
            </p>
        </div>
    )
}

export default Input