import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
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


export default function NewModal({ show, handleClose, createUser }) {
    const initialState = {
        username: '',
        roleId: '',
        counterId: '',
        role: '',
        email: '',
        password: '',
    };

    const [userData, setUserData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const validateUsername = (username) => {
        const regex = /^[A-Za-z0-9]{8,20}$/;
        return regex.test(username) && username.trim() !== '';
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars;
    };

    const validate = () => {
        const tempErrors = {};
        tempErrors.username = validateUsername(userData.username) ? "" : "Username must be 8-20 characters long, contain no special characters, and not be blank or spaces only.";
        tempErrors.password = validatePassword(userData.password) ? "" : "Password must be at least 8 characters long, contain uppercase and lowercase letters, numbers, and special characters.";
        tempErrors.email = validateEmail(userData.email) ? "" : "Invalid email address.";
        tempErrors.roleId = userData.roleId.trim() ? "" : "This field is required.";
        tempErrors.counterId = userData.counterId.trim() ? "" : "This field is required.";
        tempErrors.role = userData.role.trim() ? "" : "This field is required.";

        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            createUser(userData);
            setUserData(initialState);  // Clear the state after submission
            handleClose();
        } else {
            toast.error('Please fix the errors before submitting.', {
                theme: "colored",
                position: "bottom-right"
            });
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
            <Modal size="lg" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6} className="me-5 ms-3">
                                <InputGroup className="mb-4 mt-4">
                                    <TextField
                                        id="fullWidth"
                                        label="Username"
                                        variant="outlined"
                                        name='username'
                                        value={userData.username}
                                        onChange={handleInputChange}
                                        error={!!errors.username}
                                        helperText={errors.username}
                                        required
                                        sx={{
                                            width: 400,
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'gray', // sets the border color
                                                },
                                            }
                                        }}
                                    />
                                </InputGroup>

                                <InputGroup className="mb-4 mt-4">
                                    <TextField
                                        id="fullWidth"
                                        label="Password"
                                        variant="outlined"
                                        name='password'
                                        type="password"
                                        value={userData.password}
                                        onChange={handleInputChange}
                                        error={!!errors.password}
                                        helperText={errors.password}
                                        required
                                        sx={{
                                            width: 300,
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'gray', // sets the border color
                                                },
                                            }
                                        }}
                                    />
                                </InputGroup>

                                <InputGroup className="mb-4 mt-4">
                                    <TextField
                                        id="fullWidth"
                                        label="Email"
                                        variant="outlined"
                                        name='email'
                                        value={userData.email}
                                        onChange={handleInputChange}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                        required
                                        sx={{
                                            width: 300,
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'gray', // sets the border color
                                                },
                                            }
                                        }}
                                    />
                                </InputGroup>
                            </Col>
                            <Col md={5}>
                                <InputGroup className="mb-4 mt-3">
                                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel>Role ID</InputLabel>
                                        <Input
                                            name='roleId'
                                            value={userData.roleId}
                                            onChange={handleInputChange}
                                            error={!!errors.roleId}
                                        />
                                        {errors.roleId && <p style={{ color: 'red' }}>{errors.roleId}</p>}
                                    </FormControl>
                                </InputGroup>

                                <InputGroup className="mb-4 mt-3">
                                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel>Counter ID</InputLabel>
                                        <Input
                                            name='counterId'
                                            value={userData.counterId}
                                            onChange={handleInputChange}
                                            error={!!errors.counterId}
                                        />
                                        {errors.counterId && <p style={{ color: 'red' }}>{errors.counterId}</p>}
                                    </FormControl>
                                </InputGroup>
                            </Col>

                            <Col md={6}>
                                <InputGroup className="mb-4 mt-3 ms-5">
                                    <FormControl>
                                        <FormLabel>Role</FormLabel>
                                        <RadioGroup
                                            name='role'
                                            value={userData.role}
                                            onChange={handleInputChange}
                                            style={{ flexDirection: 'row' }}
                                        >
                                            <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
                                            <FormControlLabel value="Staff" control={<Radio />} label="Staff" />
                                            <FormControlLabel value="Manager" control={<Radio />} label="Manager" />
                                        </RadioGroup>
                                        {errors.role && <p style={{ color: 'red' }}>{errors.role}</p>}
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
    createUser: PropTypes.func.isRequired,
};
