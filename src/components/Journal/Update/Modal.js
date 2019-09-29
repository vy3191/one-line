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

      <Modal show={deleteShow} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this Journal?</Modal.Body>
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

