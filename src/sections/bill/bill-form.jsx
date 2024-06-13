import React, { useState } from 'react';
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
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

const InvoiceTemplate = ({ open, onClose, onSubmit }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dueDate, setDueDate] = useState(new Date());
    const [invoiceNumber, setInvoiceNumber] = useState(1);
    const [billToName, setBillToName] = useState('');
    const [billToEmail, setBillToEmail] = useState('');
    const [billToAddress, setBillToAddress] = useState('');
    const [billFromName, setBillFromName] = useState('');
    const [billFromEmail, setBillFromEmail] = useState('');
    const [billFromAddress, setBillFromAddress] = useState('');
    const [items, setItems] = useState([]);
    const [currency, setCurrency] = useState('USD');
    const [taxRate, setTaxRate] = useState(0);
    const [discountRate, setDiscountRate] = useState(0);

    const handleAddItem = () => {
        setItems([...items, { name: '', description: '', qty: 1, price: 1.00 }]);
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
                        <Typography variant="h5">Invoice Details</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Current Date"
                                    type="date"
                                    value={currentDate.toISOString().slice(0, 10)}
                                    onChange={(e) => setCurrentDate(new Date(e.target.value))}
                                    fullWidth
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
                                    // Note: You have to add your own state and handler for Invoice ID
                                    onChange={(e) => setInvoiceNumber(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6">Billing Details</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Bill To Name"
                                    value={billToName}
                                    onChange={(e) => setBillToName(e.target.value)}
                                    fullWidth
                                />
                                <TextField
                                    label="Bill To Email"
                                    value={billToEmail}
                                    onChange={(e) => setBillToEmail(e.target.value)}
                                    fullWidth
                                />
                                <TextField
                                    label="Bill To Address"
                                    value={billToAddress}
                                    onChange={(e) => setBillToAddress(e.target.value)}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    label="Bill From Name"
                                    value={billFromName}
                                    onChange={(e) => setBillFromName(e.target.value)}
                                    fullWidth
                                />
                                <TextField
                                    label="Bill From Email"
                                    value={billFromEmail}
                                    onChange={(e) => setBillFromEmail(e.target.value)}
                                    fullWidth
                                />
                                <TextField
                                    label="Bill From Address"
                                    value={billFromAddress}
                                    onChange={(e) => setBillFromAddress(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6">Items</Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Description</TableCell>
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
                                            <TextField
                                                value={item.name}
                                                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                value={item.description}
                                                onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                type="number"
                                                value={item.qty}
                                                onChange={(e) => handleInputChange(index, 'qty', e.target.value)}
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                type="number"
                                                value={item.price}
                                                onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                                                fullWidth
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
                        <Button onClick={handleAddItem}>Add Item</Button>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel>Currency</InputLabel>
                                <Select
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                >
                                    <MenuItem value="USD">USD</MenuItem>
                                    <MenuItem value="EUR">EUR</MenuItem>
                                    <MenuItem value="GBP">GBP</MenuItem>
                                    {/* Add more currencies as needed */}
                                </Select>
                            </FormControl>
                            <TextField
                                label="Tax Rate (%)"
                                type="number"
                                value={taxRate}
                                onChange={(e) => setTaxRate(parseFloat(e.target.value))}
                                fullWidth
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
                <Button onClick={onClose} color="primary">Cancel</Button>
                <Button onClick={handleSubmit} color="primary">Save</Button>
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