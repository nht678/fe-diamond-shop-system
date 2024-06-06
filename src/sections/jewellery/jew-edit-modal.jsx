import PropTypes from 'prop-types';
import React, { useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Row, Col, Modal, Button } from 'react-bootstrap';

import Radio from '@mui/material/Radio';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment'
import FormControlLabel from '@mui/material/FormControlLabel';

export default function EditModal({ show, handleClose, name, weight, laborCost, price, gemCost, typeID, warrantyID, status, onUpdate }) {

    const [formData, setFormData] = useState({
        jewName: name,
        weight,
        laborCost,
        price,
        gemCost,
        typeID,
        warrantyID,
        status,
      });



      const handleChange = (e) => {
        const { name: inputName, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [inputName]: value
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
           onUpdate(formData);
          handleClose();

      };

    return (
        <>
            <style type="text/css">
                {`
          .custom-range::-webkit-slider-runnable-track {
            background: gray; /* Black track */
          }

          .custom-range::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            background: blue; /*  thumb */
            cursor: pointer;
            border-radius: 50%;
            margin-top: -4px; /* Adjust based on thumb height */
          }
          
        `}
            </style>
            <Modal size="lg" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Update Jewellery</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form onSubmit={handleSubmit}> 
                    <Row>
                        <Col md={6} className="me-5 ms-3"  >
                            <InputGroup className="mb-4 mt-4">
                                <TextField id="fullWidth" label="Jewellery Name" name="jewName" value={formData.jewName} onChange={handleChange} variant="outlined" sx={{
                                    width: 400,
                                    
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'gray', // sets the border color
                                        },
                                    }
                                }
                                } />
                            </InputGroup>

                            <InputGroup className="mb-4 mt-4">
                                <TextField id="fullWidth" label="Type ID" variant="outlined" name='typeID' value={formData.typeID} onChange={handleChange} sx={{
                                    width: 300,
                                    
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'gray', // sets the border color
                                        },
                                    }
                                }
                                } />
                            </InputGroup>

                            <InputGroup className="mb-4 mt-4">
                                <TextField id="fullWidth" label="Warranty ID" variant="outlined" name='warrantyID'value={formData.warrantyID} onChange={handleChange} sx={{
                                    width: 300,
                                    
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'gray', // sets the border color
                                        },
                                    }
                                }
                                } />
                            </InputGroup>

                        </Col>
                        <Col md={5}>
                            <InputGroup className="mb-4 mt-3 ">
                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-amount">Price</InputLabel>
                                    <Input
                                        id="standard-adornment-amount"
                                        name='price'
                                        value={formData.price}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                            </InputGroup>

                            <InputGroup className="mb-4 mt-3 ">
                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-amount">Labor Cost</InputLabel>
                                    <Input
                                        id="standard-adornment-amount"
                                        name='laborCost'
                                        value={formData.laborCost}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                            </InputGroup>

                            <InputGroup className="mb-4 mt-3 ">
                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-amount">Gem Cost</InputLabel>
                                    <Input
                                        id="standard-adornment-amount"
                                        name='gemCost'
                                        value={formData.gemCost}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                            </InputGroup>


                        </Col>

                        <Col md={6}>
                            <InputGroup className="mb-4 mt-3 ms-3">

                                <Form.Label>Weight: {formData.weight} grams</Form.Label>
                                <Form.Range
                                    className="custom-range"

                                    min={0}
                                    max={2000}
                                    step={1}
                                    name='weight'
                                    value={formData.weight}
                                    onChange={handleChange}
                                    
                                />
                            </InputGroup>

                        </Col>

                        <Col md={6}>
                            <InputGroup className="mb-4 mt-3 ms-5">
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Status</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"                                      
                                        name='status'
                                        value={formData.status}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="In-stock" control={<Radio />} label="In-stock" />
                                        <FormControlLabel value="Out-stock" control={<Radio />} label="Out-stock" />
                                    </RadioGroup>
                                </FormControl>
                            </InputGroup>
                        </Col>

                    </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"onClick={handleSubmit} >Save changes</Button >
                </Modal.Footer>
            </Modal>
        </>
    );
}

EditModal.propTypes = {
    
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    weight: PropTypes.any.isRequired,
    laborCost: PropTypes.any.isRequired,
    gemCost: PropTypes.any.isRequired,
    price: PropTypes.any.isRequired,
    typeID: PropTypes.string.isRequired,
    warrantyID: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,   
    onUpdate: PropTypes.func.isRequired,

};