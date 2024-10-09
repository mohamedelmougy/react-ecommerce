import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteUserAddress } from '../../redux/actions/userAddressesAction';

const DeleteAddressHook = (item) => {
    const dispatch = useDispatch();
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    await dispatch(deleteUserAddress(item._id));
    setShow(false);
    window.location.reload();
  };
  return [show, handleClose, handleShow, handleDelete]
}

export default DeleteAddressHook
