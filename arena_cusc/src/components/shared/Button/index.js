function Button({ children, className, type }) {
  let btnStyle = 'py-3 px-10';
  {
    type === 'sm' && (btnStyle = 'px-10');
  }

  return (
    <>
      <button
        className={`${className} ${btnStyle} bg-[#ed3237] text-white font-bold  uppercase rounded-full hover:shadow-[0_0_15px_#ed3238d4]`}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
