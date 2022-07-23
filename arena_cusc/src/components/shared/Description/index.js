function Description({ children, className }) {
  return (
    <>
      <div className={`${className} text-base text-left`}>{children}</div>
    </>
  );
}

export default Description;
