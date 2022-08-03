function Description({ children, className }) {
  return (
    <>
      <p className={`${className} text-base text-left`}>{children}</p>
    </>
  );
}

export default Description;
