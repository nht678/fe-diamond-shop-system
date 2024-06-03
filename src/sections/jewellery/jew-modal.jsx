import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarcode, faMoneyBill, faDollarSign, faWeightHanging } from '@fortawesome/free-solid-svg-icons'

export default function InfoModal({ show, handleClose, name, weight, laborCost, price, gemCost, jewelryTypeName, warranty }) {


  return (
    <Modal size="md" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Row>
          <Col md={5}>
            <p><FontAwesomeIcon icon={faWeightHanging} /> &nbsp; Weight: {weight}</p>
            <p><FontAwesomeIcon icon={faMoneyBill} /> &nbsp; Price: {price}</p>
            <p><FontAwesomeIcon icon={faDollarSign} /> &nbsp; Labor Cost: {laborCost}</p>
            <p><FontAwesomeIcon icon={faDollarSign} /> &nbsp; Gem Cost: {gemCost}</p>
          </Col>
          <Col md={7}>
            <p><FontAwesomeIcon icon={faBarcode} /> &nbsp; jewelryTypeName: {jewelryTypeName}</p>
            <p><FontAwesomeIcon icon={faBarcode} /> &nbsp; warrantyName: {warranty.description}</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

InfoModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  laborCost: PropTypes.any.isRequired,
  gemCost: PropTypes.any.isRequired,
  price: PropTypes.any.isRequired,
  jewelryTypeName: PropTypes.string.isRequired,
  warranty: PropTypes.string.isRequired,
};


