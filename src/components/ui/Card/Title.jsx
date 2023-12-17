/* eslint-disable react/prop-types */

function Title({children,className}) {
  return (
    <p className={`font-semibold  text-lg my-3 ` +className}>
        {children}
    </p>
  )
}

export default Title