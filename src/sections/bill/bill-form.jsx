import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    Typography,
    Grid,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Box,
    IconButton,
    Autocomplete,
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { staff } from 'src/_mock/staff';
import { customer } from 'src/_mock/customer';
import { fetchAllJew } from 'src/_mock/jewellery';

const InvoiceTemplate = ({ open, onClose, onSubmit }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dueDate, setDueDate] = useState(new Date());
    const [invoiceNumber, setInvoiceNumber] = useState(1);
    const [billTo, setBillTo] = useState(null);
    const [billFrom, setBillFrom] = useState(null);
    const [items, setItems] = useState([]);
    const [currency, setCurrency] = useState('USD');
    const [taxRate, setTaxRate] = useState(0);
    const [discountRate, setDiscountRate] = useState(0);
    const [jewelryData, setJewelryData] = useState([]);


    const staffData = staff;
    const customerData = customer;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchAllJew();
            setJewelryData(response.data);
        }

        fetchData();
    }, []);

    const handleAddItem = () => {
        setItems([...items, { name: '', qty: 1, price: 0 }])
    };

    const handleInputChange = (index, field, value) => {
        const updatedItems = [...items];
        updatedItems[index][field] = value;
        setItems(updatedItems);
    };

    const handleDeleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const calculateSubtotal = () =>
        items.reduce((total, item) => total + item.qty * item.price, 0);

    const calculateDiscount = () =>
        calculateSubtotal() * (discountRate / 100);

    const calculateTax = () =>
        (calculateSubtotal() - calculateDiscount()) * (taxRate / 100);

    const calculateTotal = () =>
        calculateSubtotal() - calculateDiscount() + calculateTax();

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(/* form data */);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullScreen>
            <DialogTitle>New Bill</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5" style={{ marginBottom: 16 }} >Invoice Details</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Current Date"
                                    type="date"
                                    value={currentDate.toISOString().slice(0, 10)}
                                    onChange={(e) => setCurrentDate(new Date(e.target.value))}
                                    fullWidth
                                    style={{ marginBottom: 16 }}
                                />
                                <TextField
                                    label="Due Date"
                                    type="date"
                                    value={dueDate.toISOString().slice(0, 10)}
                                    onChange={(e) => setDueDate(new Date(e.target.value))}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Invoice ID"
                                    value={invoiceNumber}
                                    onChange={(e) => setInvoiceNumber(e.target.value)}
                                    fullWidth
                                    style={{ marginBottom: 16 }}
                                />
                                <FormControl fullWidth variant="outlined" style={{ marginBottom: 16 }}>
                                <InputLabel id="demo-simple-select-outlined-label">Currency</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                    label="Currency"
                                >
                                    <MenuItem value="USD">USD</MenuItem>
                                    <MenuItem value="EUR">EUR</MenuItem>
                                    <MenuItem value="GBP">GBP</MenuItem>
                                    {/* Add more currencies as needed */}
                                </Select>
                            </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6" style={{ marginBottom: 16 }}>Billing Details</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Autocomplete
                                    options={customerData}
                                    getOptionLabel={(option) => option.name}
                                    onChange={(event, newValue) => {
                                        setBillTo(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Bill To Name" fullWidth />}
                                    style={{ marginBottom: 16 }}
                                />
                                {billTo && (
                                    <>
                                        <TextField
                                            label="Bill To Phone"
                                            value={billTo.phoneNumber}
                                            fullWidth
                                            style={{ marginBottom: 16 }}
                                            disabled
                                        />
                                        <TextField
                                            label="Bill To Address"
                                            value={billTo.address}
                                            fullWidth
                                            disabled
                                        />
                                    </>
                                )}
                            </Grid>
                            <Grid item xs={6}>
                                <Autocomplete
                                    options={staffData}
                                    getOptionLabel={(option) => option.userName}
                                    onChange={(event, newValue) => {
                                        setBillFrom(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Bill From Name" fullWidth />}
                                    style={{ marginBottom: 16 }}
                                />
                                {billFrom && (
                                    <>
                                        <TextField
                                            label="Bill From Email"
                                            value={billFrom.email}
                                            fullWidth
                                            style={{ marginBottom: 16 }}
                                            disabled
                                        />
                                        <TextField
                                            label="Bill From RoleId"
                                            value={billFrom.roleId}
                                            fullWidth
                                            disabled
                                        />
                                    </>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6" style={{ marginBottom: 16 }}>Items</Typography>
                        <Table style={{ marginBottom: 16 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Qty</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Total</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Autocomplete
                                                options={jewelryData}
                                                getOptionLabel={(option) => option.name}
                                                value={item}
                                                onChange={(event, newValue) => {
                                                    handleInputChange(index, 'name', newValue.name);
                                                    handleInputChange(index, 'price', newValue.price);
                                                    handleInputChange(index, 'qty', 1); // Default quantity
                                                }}
                                                renderInput={(params) => <TextField {...params} label="Select Item" fullWidth />}
                                                style={{ marginBottom: 16 }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                type="number"
                                                value={item.qty}
                                                fullWidth
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                type="number"
                                                value={item.price}
                                                fullWidth
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            {(item.qty * item.price).toFixed(2)}
                                        </TableCell>
                                        <TableCell>
                                            <IconButton onClick={() => handleDeleteItem(index)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Button onClick={ handleAddItem }  style={{ marginBottom: 16 }}>Add Item</Button>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Tax Rate (%)"
                                type="number"
                                value={taxRate}
                                onChange={(e) => setTaxRate(parseFloat(e.target.value))}
                                fullWidth
                                style={{ marginBottom: 16 }}
                            />
                            <TextField
                                label="Discount Rate (%)"
                                type="number"
                                value={discountRate}
                                onChange={(e) => setDiscountRate(parseFloat(e.target.value))}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">Summary</Typography>
                            <Box display="flex" justifyContent="space-between" mb={1}>
                                <Typography variant="subtitle1">Subtotal:</Typography>
                                <Typography variant="subtitle1">{`${currency} ${calculateSubtotal().toFixed(2)}`}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" mb={1}>
                                <Typography variant="subtitle1">Discount:</Typography>
                                <Typography variant="subtitle1">{`${currency} ${calculateDiscount().toFixed(2)}`}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" mb={1}>
                                <Typography variant="subtitle1">Tax:</Typography>
                                <Typography variant="subtitle1">{`${currency} ${calculateTax().toFixed(2)}`}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="h6">Total:</Typography>
                                <Typography variant="h6">{`${currency} ${calculateTotal().toFixed(2)}`}</Typography>
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
                <Box display="flex" justifyContent="flex-end" mt={2}>
                    <Button onClick={onClose} color="primary" style={{ marginRight: 8 }}>Cancel</Button>
                    <Button onClick={handleSubmit} color="primary">Save</Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

InvoiceTemplate.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default InvoiceTemplate;