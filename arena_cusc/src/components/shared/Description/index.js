function Description({ children, className }) {
  return (
    <>
      <p className={`${className} text-base text-justify`}>{children}</p>
    </>
  );
}

export default Description;
