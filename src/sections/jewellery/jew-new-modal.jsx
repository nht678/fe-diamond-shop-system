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
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function NewModal({ show, handleClose, createJew }) {
    const initialState = {
        name: '',
        typeID: '',
        warrantyID: '',
        price: '',
        laborCost: '',
        gemCost: '',
        weight: 50,
        status: 'In-stock',
    };

    const [jewelleryData, setJewelleryData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setJewelleryData({
            ...jewelleryData,
            [name]: value,
        });
    };

    const validateUsername = (username) => {
        const usernameRegex = /^[a-zA-Z0-9]{7,18}$/;
        if (!username.trim()) {
            return "Empty field.";
        }
        if (!usernameRegex.test(username.trim())) {
            return "Jewellery must longer and contain no special characters.";
        }
        return "";
    };

    const validateNumericField = (num) => {
        const usernameRegex = /^[0-9]{1,10}$/;
        if (!num.trim()) {
            return "Empty field.";
        }
        if (!usernameRegex.test(num.trim())) {
            return "Invalid number";
        }
        return "";
    };


    const validate = () => {
        const tempErrors = {};
        
        tempErrors.name = validateUsername(jewelleryData.name);
        tempErrors.typeID = jewelleryData.typeID.trim() ? "" : "This field is required.";
        tempErrors.warrantyID = jewelleryData.warrantyID.trim() ? "" : "This field is required.";
        tempErrors.price = validateNumericField(jewelleryData.price)
        tempErrors.laborCost = validateNumericField(jewelleryData.laborCost)
        tempErrors.gemCost = validateNumericField(jewelleryData.gemCost,)

        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            createJew(jewelleryData);
            setJewelleryData(initialState); // Clear the state after submission
            handleClose();
        }
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
            <Modal size="lg" show={show} onHide={handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Jewellery</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6} className="me-5 ms-3">
                                <InputGroup className="mb-4 mt-4">
                                    <TextField
                                        label="Jewellery Name"
                                        variant="outlined"
                                        name='name'
                                        value={jewelleryData.name}
                                        onChange={handleInputChange}
                                        error={!!errors.name}
                                        helperText={errors.name}
                                        sx={{
                                            width: 400,
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'gray', // sets the border color
                                                },
                                            },
                                        }}
                                    />
                                </InputGroup>

                                <InputGroup className="mb-4 mt-4">
                                    <TextField
                                        label="Type ID"
                                        variant="outlined"
                                        name='typeID'
                                        value={jewelleryData.typeID}
                                        onChange={handleInputChange}
                                        error={!!errors.typeID}
                                        helperText={errors.typeID}
                                        sx={{
                                            width: 300,
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'gray', // sets the border color
                                                },
                                            },
                                        }}
                                    />
                                </InputGroup>

                                <InputGroup className="mb-4 mt-4">
                                    <TextField
                                        label="Warranty ID"
                                        variant="outlined"
                                        name='warrantyID'
                                        value={jewelleryData.warrantyID}
                                        onChange={handleInputChange}
                                        error={!!errors.warrantyID}
                                        helperText={errors.warrantyID}
                                        sx={{
                                            width: 300,
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'gray', // sets the border color
                                                },
                                            },
                                        }}
                                    />
                                </InputGroup>
                            </Col>
                            <Col md={5}>
                                <InputGroup className="mb-4 mt-3">
                                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel>Price</InputLabel>
                                        <Input
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            name='price'
                                            value={jewelleryData.price}
                                            onChange={handleInputChange}
                                            error={!!errors.price}
                                        />
                                        {errors.price && <FormHelperText error>{errors.price}</FormHelperText>}
                                    </FormControl>
                                </InputGroup>

                                <InputGroup className="mb-4 mt-3">
                                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel>Labor Cost</InputLabel>
                                        <Input
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            name='laborCost'
                                            value={jewelleryData.laborCost}
                                            onChange={handleInputChange}
                                            error={!!errors.laborCost}
                                        />
                                        {errors.laborCost && <FormHelperText error>{errors.laborCost}</FormHelperText>}
                                    </FormControl>
                                </InputGroup>

                                <InputGroup className="mb-4 mt-3">
                                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel >Gem Cost</InputLabel>
                                        <Input
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            name='gemCost'
                                            value={jewelleryData.gemCost}
                                            onChange={handleInputChange}
                                            error={!!errors.gemCost}
                                        />
                                        {errors.gemCost && <FormHelperText error>{errors.gemCost}</FormHelperText>}
                                    </FormControl>
                                </InputGroup>
                            </Col>

                            <Col md={6}>
                                <InputGroup className="mb-4 mt-3 ms-3">
                                    <Form.Label>Weight: {jewelleryData.weight} grams</Form.Label>
                                    <Form.Range
                                        className="custom-range"
                                        name='weight'
                                        min={0}
                                        max={2000}
                                        step={1}
                                        value={jewelleryData.weight}
                                        onChange={handleInputChange}
                                    />
                                </InputGroup>
                            </Col>

                            <Col md={6}>
                                <InputGroup className="mb-4 mt-3 ms-5">
                                    <FormControl>
                                        <FormLabel>Status</FormLabel>
                                        <RadioGroup
                                            name='status'
                                            value={jewelleryData.status}
                                            onChange={handleInputChange}
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
                    <Button variant="primary" onClick={handleSubmit}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

NewModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    createJew: PropTypes.func.isRequired,
};
