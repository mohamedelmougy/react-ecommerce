import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAddress } from "../../redux/actions/userAddressesAction";

const ViewAddressesHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getAllUserAddress());
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((state) => state.userAddressesReducer.allAddresses);

  return [res];
};

export default ViewAddressesHook;
