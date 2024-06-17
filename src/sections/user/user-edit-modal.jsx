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
import FormControlLabel from '@mui/material/FormControlLabel';

export default function EditModal({ show, handleClose, name, role, roleId, email, password, counterId, onUpdate }) {


    const [formData, setFormData] = useState({
        username: name,
        role,
        roleId,
        email,
        password,
        counterId,
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
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6} className="me-5 ms-3"  >
                                <InputGroup className="mb-4 mt-4">
                                    <TextField id="fullWidth" label="Username" variant="outlined" name='username' value={formData.username} required onChange={handleChange} sx={{
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
                                    <TextField id="fullWidth" label="Password" variant="outlined" name='password' required value={formData.password} onChange={handleChange} sx={{
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
                                    <TextField id="fullWidth" label="Email" variant="outlined" name='email' value={formData.email} onChange={handleChange} sx={{
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
                            {/* <Col md={5}>
                                <InputGroup className="mb-4 mt-3 ">
                                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">Role ID</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            name='roleId'
                                            value={formData.roleId} onChange={handleChange}
                                        />
                                    </FormControl>
                                </InputGroup>

                                <InputGroup className="mb-4 mt-3 ">
                                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">Counter ID</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            name='counterId'
                                            value={formData.counterId} onChange={handleChange}
                                        />
                                    </FormControl>
                                </InputGroup>


                            </Col> */}


                            <Col md={6}>
                                <InputGroup className="mb-4 mt-3 ms-5">
                                    <FormControl>
                                        <FormLabel id="demo-controlled-radio-buttons-group">Role</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name='role'
                                            value={formData.role}
                                            onChange={handleChange}
                                            style={{ flexDirection: 'row' }}
                                        >
                                            <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
                                            <FormControlLabel value="Staff" control={<Radio />} label="Staff" />
                                            <FormControlLabel value="Manager" control={<Radio />} label="Manager" />
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
                    <Button variant="primary" onClick={handleSubmit}>Save changes</Button>

                </Modal.Footer>

            </Modal>

        </>
    );
}

EditModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    password: PropTypes.any.isRequired,
    email: PropTypes.any.isRequired,
    role: PropTypes.any.isRequired,
    roleId: PropTypes.string.isRequired,
    counterId: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired,


};