import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transection from "./Transection";
export default function History() {
  const { transaction } = useContext(GlobalContext);

  // console.log(context.transaction);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transaction.map((trans) => {
          return <Transection value={trans} key={trans.id} />;
        })}
      </ul>
    </>
  );
}
