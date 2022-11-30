import React, { useEffect, useRef, useState } from "react";
import "./Cart.css";
import Input from "../Input/Input";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { ADDTODO } from "../../Action/Index";

const Cart = ({ escpress, npress, setNpress, setEscpress }) => {
  const getData = useSelector((state) => state?.InputData?.data);
  const [isSearch, setisSearch] = useState(false);
  const [filter, setFilter] = useState("all");
  const inputData = useRef();
  const [getValue, setgetValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const save = JSON.parse(localStorage.getItem("items"));
    // console.log(save, typeof save, getData);
    if (save) {
      if (save.length > getData.length) {
        dispatch(ADDTODO(save));
      } else {
        localStorage.setItem("items", JSON.stringify(getData));
      }
    }
  }, [getData, dispatch]);

  return (
    <div className="cart">
      <h1>THINGS TO DO</h1>
      <Input
        inputData={inputData}
        isSearch={isSearch}
        filter={filter}
        escpress={escpress}
        setgetValue={setgetValue}
        getValue={getValue}
      />
      <Footer
        inputData={inputData}
        setisSearch={setisSearch}
        setFilter={setFilter}
        npress={npress}
        setNpress={setNpress}
        setEscpress={setEscpress}
        setgetValue={setgetValue}
        getValue={getValue}
        escpress={escpress}
      />
    </div>
  );
};

export default Cart;
