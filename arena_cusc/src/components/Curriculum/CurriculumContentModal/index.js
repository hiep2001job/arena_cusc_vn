export default ({ close }) => (
  <div className="modal  h-[480px] bg-white">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="header"> Modal Title </div>
    <div className="content">
      {' '}
      adipisci fugit amet dignissimos?
      <br />
      repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
    </div>
  </div>
);
