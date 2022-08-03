import './style.css';
function Strokedouble({ children, className, offset }) {
  return (
    <div className="stroke-content flex justify-center items-center relative">
      <div>{children}</div>
      <div
        className={`circle ${className} absolute rounded-full h-full outline-offset-[20px] outline-primary-color outline-2 outline`}
      ></div>
      <div
        className={`circle ${className} absolute rounded-full h-full outline-offset-[10px] outline-primary-color outline-2 outline`}
      ></div>
    </div>
  );
}

export default Strokedouble;
