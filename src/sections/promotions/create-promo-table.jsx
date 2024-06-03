import axios from 'axios';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

function PromotionForm({ open, onClose, onSubmit }) {
    const initialFormState = {
        type: '',
        discountRate: 0,
        startDate: '',
        endDate: '',
        approveManager: '',
        description: '',
    };
    const [formState, setFormState] = React.useState(initialFormState);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5188/api/Promotion/AddNewPromotion`, formState);
            onSubmit(response.data); // Truyền dữ liệu mới đã tạo về thành phần cha xử lý
            setFormState(initialFormState);
            onClose();
        } catch (error) {
            console.error('Lỗi khi tạo dữ liệu khuyến mãi:', error);
        }
    };
    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New Promotion</DialogTitle>
            <DialogContent>

                <TextField
                    margin="dense"
                    name="type"
                    label="Type"
                    type="text"
                    fullWidth
                    onChange={handleChange}
                    InputProps={{ style: { marginBottom: 10 } }}
                />
                <TextField
                    margin="dense"
                    name="discountRate"
                    label="Discount Rate"
                    type="text"
                    fullWidth
                    onChange={handleChange}
                    InputProps={{ style: { marginBottom: 10 } }}
                />
                <TextField
                    margin="dense"
                    name="startDate"
                    label=""
                    type="date"
                    fullWidth
                    onChange={handleChange}
                    InputProps={{ style: { marginBottom: 10 } }}
                />
                <TextField
                    margin="dense"
                    name="endDate"
                    label=""
                    type="date"
                    fullWidth
                    onChange={handleChange}
                    InputProps={{ style: { marginBottom: 10 } }}
                />
                <TextField
                    margin="dense"
                    name="approveManager"
                    label="Approval Manager"
                    type="text"
                    fullWidth
                    onChange={handleChange}
                    InputProps={{ style: { marginBottom: 10 } }}
                />
                <TextField
                    margin="dense"
                    name="description"
                    label="Description"
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

PromotionForm.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default PromotionForm;