function Title({ children, className }) {
  return (
    <>
      <h3 className={`${className} md:text-3xl font-bold uppercase`}>{children}</h3>
    </>
  );
}

export default Title;
