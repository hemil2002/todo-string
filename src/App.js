import Cart from "./Component/Cart/Cart";
import "./App.css";
// import FetchApi from "./Component/API/FetchApi";
import { useEffect, useState } from "react";
import { ADDTODO } from "./Action/Index";
import { useDispatch } from "react-redux";

function App() {
  const [escpress, setEscpress] = useState(true);
  const [npress, setNpress] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("keydown", deleteKeyDown, true);
  }, []);
  const deleteKeyDown = (e) => {
    // console.log(e.key);
    if (e.key === "Escape") {
      setEscpress(false);
      setNpress(true);
      // console.log("hi");
    }
    if (e.key === "n") {
      setNpress(false);
      setEscpress(true);
    } else if (e.key === "/") {
      setNpress(false);
      setEscpress(true);
    }
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        dispatch(ADDTODO(json));
      });
    // <FileList />;
  }, [dispatch]);

  return (
    <div className="App">
      <>
        <Cart
          escpress={escpress}
          npress={npress}
          setNpress={setNpress}
          setEscpress={setEscpress}
        />
        {escpress ? <p className="note">Press `Esc` to cancel.</p> : null}
        {npress ? (
          <p className="note_two">
            Press `/` to search and `N` to create a new item.
          </p>
        ) : null}
        {/* <FetchApi /> */}
      </>
    </div>
  );
}

export default App;
