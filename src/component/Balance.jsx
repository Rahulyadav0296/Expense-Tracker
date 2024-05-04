import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const { transaction } = useContext(GlobalContext);

  const amounts = transaction.map((trans) => trans.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  console.log(`Total is : ${total}`);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
}
