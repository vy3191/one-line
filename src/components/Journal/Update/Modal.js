import React from 'react';

export default function Modal() {
  const [deleteShow, setDeleteShow] = useState(false);

  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleDeleteShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleDeleteClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

