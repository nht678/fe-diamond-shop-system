import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Iconify from 'src/components/iconify';





// ----------------------------------------------------------------------

export default function UserTableRow({
  selected,
  name,
  weight,
  barcode,
  stoneCost,
  laborCost,
  handleClick,

}) {
  const [open, setOpen] = useState(null);
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

        <TableCell>{barcode}</TableCell>

        <TableCell>{weight}</TableCell>

        
        <TableCell>{stoneCost}</TableCell>

        <TableCell>{laborCost}</TableCell>

        <TableCell align="right">
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
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={() => { handleCloseMenu(); handleShow(); }} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} onClick={handleShow}/>
          Delete
        </MenuItem>
      </Popover>

      <Modal show={show} onHide={handleClose}  aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title > {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Weight</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{name}</td>
          <td>{weight}</td>
          
        </tr>
        </tbody>
    </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      
    </>
  );
}

UserTableRow.propTypes = {
  
  barcode: PropTypes.any,
  handleClick: PropTypes.func,
  stoneCost: PropTypes.any,
  laborCost: PropTypes.any,
  name: PropTypes.any,
  weight: PropTypes.any,
  selected: PropTypes.any,

};
