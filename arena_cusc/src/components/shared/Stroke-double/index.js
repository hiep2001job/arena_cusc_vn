import './style.css';
function Strokedouble({ className, offset, width }) {
  return (
    <div className="stroke-content flex justify-center items-center relative">
      <div
        className={`circle ${className} w-[25px] h-[25px] absolute rounded-full h-full outline-offset-[${offset}] outline-primary-color outline-2 outline `}
      ></div>
      <div
        className={`circle ${className} w-[25px] h-[25px] absolute rounded-full h-full outline-offset-[${
          offset * 2
        }] outline-primary-color outline-2 outline `}
      ></div>
    </div>
  );
}

export default Strokedouble;
