import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';


function PromotionEditForm({ open, onClose, onSubmit, promotion }) {
  const [formState, setFormState] = React.useState({
    // promotionId: promotion ? promotion.promotionId : '',
    type: promotion ? promotion.type : '',
    discountRate: promotion ? promotion.discountRate : '',
    startDate: promotion ? promotion.startDate : '',
    endDate: promotion ? promotion.endDate : '',
    approveManager: promotion ? promotion.approveManager : '',
    description: promotion ? promotion.description : '',
  });

  React.useEffect(() => {
    if (promotion) {
      setFormState({
        // promotionId: promotion.promotionId,
        type: promotion.type,
        discountRate: promotion.discountRate,
        startDate: promotion.startDate,
        endDate: promotion.endDate,
        approveManager: promotion.approveManager,
        description: promotion.description,
      });
    }
  }, [promotion]);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formState);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Edit Promotion</DialogTitle>
      <DialogContent>
        {/* <TextField
          autoFocus
          margin="dense"
          name="promotionId"
          label="Promotion ID"
          type="text"
          fullWidth
          onChange={handleChange}
          value={formState.promotionId}
        /> */}
        <TextField
          margin="dense"
          name="type"
          label="Type"
          value={formState.type}
          type="text"
          fullWidth
          onChange={handleChange}
          InputProps={{ style: { marginBottom: 10 } }}
        />
        <TextField
          margin="dense"
          name="discountRate"
          label="Discount Rate"
          value={formState.discountRate}
          type="text"
          fullWidth
          onChange={handleChange}
          InputProps={{ style: { marginBottom: 10 } }}
        />
        <TextField
          margin="dense"
          name="startDate"
          label=""
          value={formState.startDate}
          type="date"
          fullWidth
          onChange={handleChange}
          InputProps={{ style: { marginBottom: 10 } }}
        />
        <TextField
          margin="dense"
          name="endDate"
          value={formState.endDate}
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
          value={formState.approveManager}
          type="text"
          fullWidth
          onChange={handleChange}
          InputProps={{ style: { marginBottom: 10 } }}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          value={formState.description}
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

PromotionEditForm.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  promotion: PropTypes.shape({
    promotionId: PropTypes.any,
    type: PropTypes.string,
    discountRate: PropTypes.number,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    approveManager: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default PromotionEditForm; 