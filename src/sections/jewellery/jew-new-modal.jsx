import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Row, Col, Modal, Button } from 'react-bootstrap';

import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';


const validationSchem = Yup.object({
    name: Yup.string()
    .matches(/^(?! )[a-zA-Z0-9 ]*(?<! )$/, 'Jewellery name must be 5-30 characters long and cannot have leading or trailing spaces.')
        .required('This field is required.'),
    typeID: Yup.string().required('This field is required.'),
    warrantyID: Yup.string().required('This field is required.'),
    price: Yup.number()
        .required('This field is required.')
        .min(1, 'Price must be at least 1.')
        .max(1000000000, 'Price must be at most 1000000000.'),
        
    laborCost: Yup.number()
        .required('This field is required.')
        .min(1, 'Labor cost must be at least 1.')
        .max(1000000000, 'Labor cost must be at most 1000000000.'),
    gemCost: Yup.number()
        .required('This field is required.')
        .min(1, 'Gem cost must be at least 1.')
        .max(1000000000, 'Gem cost must be at most 1000000000.'),
    weight: Yup.number()
        .required('This field is required.')
        .min(0, 'Weight must be at least 0.')
        .max(2000, 'Weight must be at most 2000.'),
    status: Yup.string().required('This field is required.'),
});

export default function NewModal({ show, handleClose, createJew }) {
    const formik = useFormik({
        initialValues: {
            name: '',
            typeID: '',
            warrantyID: '',
            price: '',
            laborCost: '',
            gemCost: '',
            weight: 50,
            status: 'In-stock',
        },
        validationSchema: validationSchem,
        onSubmit: (values) => {
            createJew(values);
            formik.resetForm();
            handleClose();
        },
    });

    return (
        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Jewellery</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col md={6} className="me-5 ms-3">
                            <InputGroup className="mb-4 mt-4">
                                <TextField
                                    label="Jewellery Name"
                                    variant="outlined"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                    sx={{
                                        width: 400,
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'gray',
                                            },
                                        },
                                    }}
                                />
                            </InputGroup>

                            <InputGroup className="mb-4 mt-4">
                                <TextField
                                    label="Type ID"
                                    variant="outlined"
                                    name="typeID"
                                    value={formik.values.typeID}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.typeID && Boolean(formik.errors.typeID)}
                                    helperText={formik.touched.typeID && formik.errors.typeID}
                                    sx={{
                                        width: 300,
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'gray',
                                            },
                                        },
                                    }}
                                />
                            </InputGroup>

                            <InputGroup className="mb-4 mt-4">
                                <TextField
                                    label="Warranty ID"
                                    variant="outlined"
                                    name="warrantyID"
                                    value={formik.values.warrantyID}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.warrantyID && Boolean(formik.errors.warrantyID)}
                                    helperText={formik.touched.warrantyID && formik.errors.warrantyID}
                                    sx={{
                                        width: 300,
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'gray',
                                            },
                                        },
                                    }}
                                />
                            </InputGroup>
                        </Col>
                        <Col md={5}>
                            <InputGroup className="mb-4 mt-3">
                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                    <TextField
                                        label="Price"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                        }}
                                        name="price"
                                        value={formik.values.price}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.price && Boolean(formik.errors.price)}
                                        helperText={formik.touched.price && formik.errors.price}
                                    />
                                </FormControl>
                            </InputGroup>

                            <InputGroup className="mb-4 mt-3">
                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                    <TextField
                                        label="Labor Cost"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                        }}
                                        name="laborCost"
                                        value={formik.values.laborCost}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.laborCost && Boolean(formik.errors.laborCost)}
                                        helperText={formik.touched.laborCost && formik.errors.laborCost}
                                    />
                                </FormControl>
                            </InputGroup>

                            <InputGroup className="mb-4 mt-3">
                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                    <TextField
                                        label="Gem Cost"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                        }}
                                        name="gemCost"
                                        value={formik.values.gemCost}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.gemCost && Boolean(formik.errors.gemCost)}
                                        helperText={formik.touched.gemCost && formik.errors.gemCost}
                                    />
                                </FormControl>
                            </InputGroup>
                        </Col>

                        <Col md={6}>
                            <InputGroup className="mb-4 mt-3 ms-3">
                                <Form.Label>Weight: {formik.values.weight} grams</Form.Label>
                                <Form.Range
                                    className="custom-range"
                                    name="weight"
                                    min={0}
                                    max={2000}
                                    step={1}
                                    value={formik.values.weight}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ width: '100%' }}
                                />
                            </InputGroup>
                        </Col>

                        <Col md={6}>
                            <InputGroup className="mb-4 mt-3 ms-5">
                                <FormControl>
                                    <FormLabel>Status</FormLabel>
                                    <RadioGroup
                                        name="status"
                                        value={formik.values.status}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <FormControlLabel value="In-stock" control={<Radio />} label="In-stock" />
                                        <FormControlLabel value="Out-stock" control={<Radio />} label="Out-stock" />
                                    </RadioGroup>
                                </FormControl>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

NewModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    createJew: PropTypes.func.isRequired,
};
