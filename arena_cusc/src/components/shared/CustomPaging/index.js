import './CustomPaging.css';

function CustomPaging({ onClick }) {
  return (
    <>
      <div className="customPaging" onClick={onClick}></div>
    </>
  );
}

export default CustomPaging;
