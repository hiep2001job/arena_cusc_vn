export default ({ close, title, content }) => (
  <div className="modal h-[480px] bg-white shadow-2xl rounded-[25px]">
    {/* <a className="close" onClick={close}>
      &times;
    </a> */}
    <div className="header p-4 text-lg font-bold uppercase text-center shadow-[0px_0px_12px_rgba(0,0,0,0.1)] rounded-[25px]">
      {title}
    </div>
    <div className="content">{content}</div>
  </div>
);
