/* eslint-disable react/prop-types */
function Max({ children }) {
  return (
    <div
      className={`  m-auto flex  flex-col justify-center  gap-10 max-w-5xl px-2  md:px-4  lg:px-8 w-full`}
    >
      {children}
    </div>
  );
}

export default Max;
