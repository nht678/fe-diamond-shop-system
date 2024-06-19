import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import { Autocomplete } from '@mui/material';

import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import { goldprice } from 'src/_mock/goldprice';

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        label: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
        label: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
        label: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 },
    {
        label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { label: 'The Great Dictator', year: 1940 },
    { label: 'Cinema Paradiso', year: 1988 },
    { label: 'The Lives of Others', year: 2006 },
    { label: 'Grave of the Fireflies', year: 1988 },
    { label: 'Paths of Glory', year: 1957 },
    { label: 'Django Unchained', year: 2012 },
    { label: 'The Shining', year: 1980 },
    { label: 'WALL·E', year: 2008 },
    { label: 'American Beauty', year: 1999 },
    { label: 'The Dark Knight Rises', year: 2012 },
    { label: 'Princess Mononoke', year: 1997 },
    { label: 'Aliens', year: 1986 },
    { label: 'Oldboy', year: 2003 },
    { label: 'Once Upon a Time in America', year: 1984 },
    { label: 'Witness for the Prosecution', year: 1957 },
    { label: 'Das Boot', year: 1981 },
    { label: 'Citizen Kane', year: 1941 },
    { label: 'North by Northwest', year: 1959 },
    { label: 'Vertigo', year: 1958 },
    {
        label: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { label: 'Reservoir Dogs', year: 1992 },
    { label: 'Braveheart', year: 1995 },
    { label: 'M', year: 1931 },
    { label: 'Requiem for a Dream', year: 2000 },
    { label: 'Amélie', year: 2001 },
    { label: 'A Clockwork Orange', year: 1971 },
    { label: 'Like Stars on Earth', year: 2007 },
    { label: 'Taxi Driver', year: 1976 },
    { label: 'Lawrence of Arabia', year: 1962 },
    { label: 'Double Indemnity', year: 1944 },
    {
        label: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { label: 'Amadeus', year: 1984 },
    { label: 'To Kill a Mockingbird', year: 1962 },
    { label: 'Toy Story 3', year: 2010 },
    { label: 'Logan', year: 2017 },
    { label: 'Full Metal Jacket', year: 1987 },
    { label: 'Dangal', year: 2016 },
    { label: 'The Sting', year: 1973 },
    { label: '2001: A Space Odyssey', year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: 'Toy Story', year: 1995 },
    { label: 'Bicycle Thieves', year: 1948 },
    { label: 'The Kid', year: 1921 },
    { label: 'Inglourious Basterds', year: 2009 },
    { label: 'Snatch', year: 2000 },
    { label: '3 Idiots', year: 2009 },
    { label: 'Monty Python and the Holy Grail', year: 1975 },
];


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
            goldweight: 50,
            gemweight: 50,
            goldtype: '',
            gemtype: '',
            goldprice: '',
            gemprice: '',
            jewelryprice: '',
            laborCost: '',
            barcode: '',
            status: 'In-stock',
            type: 'In-stock'
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
                        <Col md={6} className="">
                            <InputGroup className=" mt-4">
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
                                        width: 300,
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'gray',
                                            },
                                        },
                                    }}
                                />
                            </InputGroup>
                            <InputGroup className="mb-4 mt-5 ">
                                <FormControl fullWidth sx={{}} variant="standard">
                                    <TextField
                                        label="LaborCost"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                        }}
                                        name="laborCost"
                                        value={formik.values.laborCost}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        // error={formik.touched.laborCost && Boolean(formik.errors.laborCost)}
                                        // helperText={formik.touched.laborCost && formik.errors.laborCost}
                                        sx={{
                                            maxWidth: 300,
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'gray',
                                                },
                                            },
                                        }}
                                    />
                                </FormControl>
                            </InputGroup>
                        </Col>
                        <Col md={5}>
                            <InputGroup className="mb-4 mt-4 ms-5">
                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                    <TextField
                                        label="JewelryPrice"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                        }}
                                        name="jewelryprice"
                                        value={formik.values.jewelryprice}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    // error={formik.touched.price && Boolean(formik.errors.price)}
                                    // helperText={formik.touched.price && formik.errors.price}
                                    />
                                </FormControl>
                            </InputGroup>



                            <InputGroup className="mb-4 mt-3 ms-5">
                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                    <TextField
                                        label="BarCost"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                        }}
                                        name="barcode"
                                        value={formik.values.barcode}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    // error={formik.touched.gemCost && Boolean(formik.errors.gemCost)}
                                    // helperText={formik.touched.gemCost && formik.errors.gemCost}
                                    />
                                </FormControl>
                            </InputGroup>
                        </Col>

                        <Col md={6} className="">
                            <InputGroup className="mb-4 ">
                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                    <TextField
                                        label="GoldPrice"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                        }}
                                        name="goldprice"
                                        value={formik.values.goldprice}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        // error={formik.touched.price && Boolean(formik.errors.price)}
                                        // helperText={formik.touched.price && formik.errors.price}
                                        sx={{
                                            maxWidth: 300,
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'gray',
                                                },
                                            },
                                        }}
                                    />
                                </FormControl>
                            </InputGroup>
                      
                        </Col>
                        <Col md={5}>
                            <InputGroup className="mb-4 ms-5">
                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                    <TextField
                                        label="GemPrice"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                        }}
                                        name="gemprice"
                                        value={formik.values.gemprice}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    // error={formik.touched.price && Boolean(formik.errors.price)}
                                    // helperText={formik.touched.price && formik.errors.price}
                                    />
                                </FormControl>
                            </InputGroup>

                     
                        </Col>

                        <Col md={6}>
                            <InputGroup className="mb-4 mt-3 ms-3">
                                <Form.Label>GoldWeight: {formik.values.goldweight} grams</Form.Label>
                                <Form.Range
                                    className="custom-range"
                                    name="goldweight"
                                    min={0}
                                    max={2000}
                                    step={1}
                                    value={formik.values.goldweight}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ width: '100%' }}
                                />
                            </InputGroup>
                        </Col>

                        <Col md={6}>
                            <InputGroup className="mb-4 mt-3 ms-5">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="GoldType" />}
                                />
                            </InputGroup>
                        </Col>
                        <Col md={6}>
                            <InputGroup className="mb-4 mt-3 ms-3">
                                <Form.Label>GemWeight: {formik.values.gemweight} grams</Form.Label>
                                <Form.Range
                                    className="custom-range"
                                    name="gemweight"
                                    min={0}
                                    max={2000}
                                    step={1}
                                    value={formik.values.gemweight}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ width: '100%' }}
                                />
                            </InputGroup>
                        </Col>
                        <Col md={6}>
                            <InputGroup className="mb-4 mt-3 ms-5">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Gemtype" />}
                                />
                            </InputGroup>
                        </Col>
                        <Col md={{ span: 6, offset: 6 }} >
                            <InputGroup className="mb-4 mt-3 ms-5">
                                {/* <FormControl>
                                    <FormLabel>Type</FormLabel>
                                    <RadioGroup
                                        name="type"
                                        value={formik.values.type}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <FormControlLabel value="In-stock" control={<Radio />} label="In-stock" />
                                        <FormControlLabel value="Out-stock" control={<Radio />} label="Out-stock" />
                                    </RadioGroup>
                                </FormControl> */}
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Type" />}
                                />
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
