import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faBarcode, faEnvelope, faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'

export default function DelModal({ show, handleClose, name, role, roleId, email, password, counterId, onDelete }) {


  return (
    <Modal size="md" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
      <Modal.Title> <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: 'red' }} /> &nbsp;Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      <Row>

            <Col >
            <p><FontAwesomeIcon icon={faUser} /><strong> &nbsp; Username: &nbsp; </strong> {name}</p>
            <p><FontAwesomeIcon icon={faLock}/> <strong> &nbsp; Password: &nbsp; </strong> {password}</p> <br/>
            <p> <strong> - &nbsp; Role: </strong>&nbsp; {role}</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> &nbsp; Email: &nbsp;{email}</p>
            <p><FontAwesomeIcon icon={faBarcode} /> &nbsp; Counter ID: {counterId}</p>
            <p><FontAwesomeIcon icon={faBarcode} /> &nbsp; Role ID: {roleId}</p>
            </Col>
          </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={() => {handleClose(); onDelete()}} >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

DelModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  password: PropTypes.any.isRequired,
  email: PropTypes.any.isRequired,
  role: PropTypes.any.isRequired,
  roleId: PropTypes.string.isRequired,
  counterId: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,

};


