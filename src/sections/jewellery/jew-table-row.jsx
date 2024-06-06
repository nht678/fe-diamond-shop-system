import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

import InfoModal from './jew-modal';
import DelModal from './jew-del-modal';
import EditModal from './jew-edit-modal';




// ----------------------------------------------------------------------

export default function UserTableRow({
  id,
  selected,
  name,
  weight,
  price,
  gemCost,
  laborCost,
  warrantyID,
  typeID,
  handleClick,
  status,
  onDelete,
  onUpdate,

}) {
  const [open, setOpen] = useState(null);
  const [showDel, setShowDel] = useState(false);

  const handleCloseDel = () => setShowDel(false);
  const handleShowDel = () => setShowDel(true);

  const [showEd, setShowEd] = useState(false);

  const handleCloseEd = () => setShowEd(false);
  const handleShowEd = () => setShowEd(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };



  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>

            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{weight}</TableCell>

        <TableCell>{price}$</TableCell>

        <TableCell>{gemCost}$</TableCell>

        <TableCell>{laborCost}$</TableCell>

        <TableCell>
          <Label color={(status === 'Out-stock' && 'error') || 'success'}>{status}</Label>
        </TableCell>



        <TableCell align="right">
          <Button variant="outline-primary" onClick={handleShow}>More Info</Button>
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={() => { handleCloseMenu(); handleShowEd(); }}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} onClick={handleShowEd} />
          Edit
        </MenuItem>

        <MenuItem onClick={() => { handleCloseMenu(); handleShowDel(); }} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} onClick={handleShowDel} />
          Delete
        </MenuItem>
      </Popover>

      <InfoModal show={show} handleClose={handleClose} name={name} price={price} weight={weight} laborCost={laborCost} gemCost={gemCost} typeID={typeID} warrantyID={warrantyID} />

      <DelModal show={showDel} handleClose={handleCloseDel} name={name} price={price} weight={weight} laborCost={laborCost} gemCost={gemCost} typeID={typeID} warrantyID={warrantyID} onDelete={onDelete}/>

      <EditModal show={showEd} handleClose={handleCloseEd} name={name} price={price} weight={weight} laborCost={laborCost} gemCost={gemCost} typeID={typeID} warrantyID={warrantyID} status={status} onUpdate={(updatedData) => onUpdate(id, updatedData)} />

    </>
  );
}

UserTableRow.propTypes = {
  id: PropTypes.any,
  warrantyID: PropTypes.any,
  typeID: PropTypes.any,
  price: PropTypes.any,
  handleClick: PropTypes.func,
  gemCost: PropTypes.any,
  laborCost: PropTypes.any,
  name: PropTypes.any,
  weight: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,

};
