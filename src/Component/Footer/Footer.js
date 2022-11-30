import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import "./Footer.css";
import { useSelector } from "react-redux";

const Footer = ({
  inputData,
  setisSearch,
  setFilter,
  npress,
  setEscpress,
  setgetValue,
  escpress,
  getValue,
}) => {
  const countData = useSelector((state) => state?.InputData?.data.length);

  useEffect(() => {
    if (npress === false) {
      inputData.current.focus();
    }
  });
  
// Press 'N'

  useEffect(() => {
    if (escpress === false) {
      document.addEventListener("keyup", Npress, true);
    }

    if(getValue === true){
      document.removeEventListener("keyup", Npress,true)
    }
  });

  const Npress = (e) => {
    if (e.key === "n") {
      setEscpress(true);
      AddNewData();
    }
  };

// Press '/'

  useEffect(() => {
    if (escpress === false) {
      document.addEventListener("keyup", press, true);
    }
  });

  const press = (e) => {
    if (e.key === "/") {
      setEscpress(true);
      SearchData();
    }
  };

  const AddNewData = () => {
    setisSearch(false);
    setgetValue("");
    inputData.current.focus();
  };
  const SearchData = () => {
    setisSearch(true);
    setgetValue("");
    inputData.current.focus();
  };

  return (
    <>
      <div className="footer">
        <div className="paer_one">
          <div>
            <a href="/#" title="Add New" className="plus" onClick={AddNewData}>
              <AiOutlinePlus />
            </a>
            <a href="/#" title="Search" className="bar" onClick={SearchData}>
              <BiSearch />
            </a>
          </div>
          <div className="noted"> | {countData} items left</div>
        </div>
        <div className="part_two">
          <a href="/#" className="" onClick={() => setFilter("all")}>
            All
          </a>
          <a href="/#" className="" onClick={() => setFilter("active")}>
            Active
          </a>
          <a href="/#" className="" onClick={() => setFilter("completed")}>
            Completed
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
