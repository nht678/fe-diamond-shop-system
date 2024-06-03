import PropTypes from 'prop-types';
import React, { useState } from 'react';
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

export default function EditModal({ show, handleClose, name, weight, laborCost, price, gemCost, jewelryTypeName, warranty }) {

    const [rangeValue, setRangeValue] = useState(weight);

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
    };

    const [value, setValue] = useState("In-stock");

    const handleChange = (event) => {
        setValue(event.target.value);
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
                    <Modal.Title>Add New Jewellery</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row>
                        <Col md={6} className="me-5 ms-3"  >
                            <InputGroup className="mb-4 mt-4">
                                <TextField id="fullWidth" label="Jewellery Name" value={name} variant="outlined" sx={{
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
                                <TextField id="fullWidth" label="Type ID" variant="outlined" value={jewelryTypeName} sx={{
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
                                <TextField id="fullWidth" label="Warranty ID" variant="outlined" value={warranty.description} sx={{
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
                                        value={price}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    />
                                </FormControl>
                            </InputGroup>

                            <InputGroup className="mb-4 mt-3 ">
                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-amount">Labor Cost</InputLabel>
                                    <Input
                                        id="standard-adornment-amount"
                                        value={laborCost}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    />
                                </FormControl>
                            </InputGroup>

                            <InputGroup className="mb-4 mt-3 ">
                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-amount">Gem Cost</InputLabel>
                                    <Input
                                        id="standard-adornment-amount"
                                        value={gemCost}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    />
                                </FormControl>
                            </InputGroup>


                        </Col>

                        <Col md={6}>
                            <InputGroup className="mb-4 mt-3 ms-3">

                                <Form.Label>Weight: {rangeValue} grams</Form.Label>
                                <Form.Range
                                    className="custom-range"

                                    min={0}
                                    max={2000}
                                    step={1}
                                    value={rangeValue}
                                    onChange={handleRangeChange}

                                />
                            </InputGroup>

                        </Col>

                        <Col md={6}>
                            <InputGroup className="mb-4 mt-3 ms-5">
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Status</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="In-stock" />
                                        <FormControlLabel value="male" control={<Radio />} label="Out-stock" />
                                    </RadioGroup>
                                </FormControl>
                            </InputGroup>
                        </Col>

                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

EditModal.propTypes = {
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