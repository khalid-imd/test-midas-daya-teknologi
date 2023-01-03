import React, { useState } from "react";

const Modal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Password isn't correct</Modal.Body>
      </Modal>
    </div>
  );
};

export default Modal;
