function Button({ children, className, type, target, href }) {
  let btnStyle = 'py-3 px-10';
  {
    type === 'sm' && (btnStyle = 'px-10');
  }

  const classNames = `${className} ${btnStyle} bg-[#ed3237] text-white font-bold  uppercase rounded-full hover:shadow-[0_0_15px_#ed3238d4]`;

  if (href) {
    return (
      <>
        <button className={classNames}>
          <a target={target} href={href}>
            {children}
          </a>
        </button>
      </>
    );
  } else {
    return (
      <>
        <button className={classNames}>{children}</button>
      </>
    );
  }
}

export default Button;
