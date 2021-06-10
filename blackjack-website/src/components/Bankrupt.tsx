import React from "react";
import { useDispatch } from "react-redux";

const Bankrupt: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>You ran out of chips</h1>
    </>
  );
};

export default Bankrupt;
