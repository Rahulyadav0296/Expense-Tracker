import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transection({ value }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = value.amount > 0 ? "+" : "-";
  return (
    <li className={sign === "-" ? "minus" : "plus"}>
      {value.text}{" "}
      <span>
        {sign}${Math.abs(value.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(value.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}
