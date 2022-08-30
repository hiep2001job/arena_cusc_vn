export default ({ close, content, closeBtn }) => (
  <div className="modal bg-white shadow-2xl rounded-[25px]">
    {closeBtn && (
      <a className="close" onClick={close}>
        &times;
      </a>
    )}
    {content}
  </div>
);
