import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Success({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>New Project Created</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You successfully created a new project!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Success;