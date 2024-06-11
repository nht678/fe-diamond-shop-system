import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';


function CustomerForm({ open, onClose, onSubmit }) {
    const initialFormState = {
        CusId: '',
        name: '',
        address: '',
        phoneNumber: '',
        point: '',
        gender: '',
        
    };

    const [formState, setFormState] = React.useState(initialFormState);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn chặn hành động submit mặc định của form
        onSubmit(formState); // Gọi addCustomer
        setFormState(initialFormState); // Clear các trường của form sau khi submit
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New Customer</DialogTitle>
            <DialogContent>
            <TextField
          autoFocus
          margin="dense"
          name="promotionId"
          label="Promotion ID"
          type="text"
          fullWidth
          onChange={handleChange}
          value={formState.CusID}
        />
        <TextField
                    margin="dense"
                    name="name"
                    label="Name"
                    value={formState.name}
                    type="text"
                    fullWidth
                    onChange={handleChange}
                    InputProps={{ style: { marginBottom: 10 } }}
                />
                <TextField
                    margin="dense"
                    name="address"
                    label="Address"
                    value={formState.address}
                    type="text"
                    fullWidth
                    onChange={handleChange}
                    InputProps={{ style: { marginBottom: 10 } }}
                />
                <TextField
                    margin="dense"
                    name="phoneNumber"
                    label="Phone Number"
                    value={formState.phoneNumber}
                    type="text"
                    fullWidth
                    onChange={handleChange}
                    InputProps={{ style: { marginBottom: 10 } }}
                />
                <TextField
                    margin="dense"
                    name="point"
                    label="Point"
                    value={formState.point}
                    type="point"
                    fullWidth
                    onChange={handleChange}
                    InputProps={{ style: { marginBottom: 10 } }}
                />
                <TextField
                    margin="dense"
                    name="gender"
                    label="Gender"
                    value={formState.gender}
                    type="text"
                    fullWidth
                    onChange={handleChange}
                    InputProps={{ style: { marginBottom: 10 } }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}

CustomerForm.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default CustomerForm;