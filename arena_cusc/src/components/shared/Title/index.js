function Title({ children, className }) {
  return (
    <>
      <h1 className={`${className} md:text-3xl font-bold uppercase`}>{children}</h1>
    </>
  );
}

export default Title;
