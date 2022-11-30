import React, { useEffect, useState } from "react";
import { ADDTODO } from "../../Action/Index";
import { useDispatch, useSelector } from "react-redux";
import "./Input.css";

const Input = ({
  inputData,
  isSearch,
  filter,
  escpress,
  getValue,
  setgetValue,
}) => {
  const myState = useSelector((state) => state?.InputData?.data);
  const dispatch = useDispatch();
  const [todoList, setTodoList] = useState([]);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (myState) {
      if (filter === "all") {
        setTodoList(myState);
        setComplete(false);
      }
      // console.log(myState);
      let test = null;
      if (filter === "active") {
        setTodoList(
          myState.filter((val) => {
            if (!val.completed) {
              return val;
            }
            return test;
          })
        );
        setComplete(false);
      }
      if (filter === "completed") {
        setTodoList(
          myState.filter((val) => {
            if (val.completed) {
              setComplete(false);
              return val;
            } else if (val.completed) {
              setComplete(false);
            }
            return test;
          })
        );
      }
    }
  }, [myState, filter]);

  const checkBoxDesable = (id) => {
    dispatch(
      ADDTODO(
        todoList.map((td) => {
          if (id === td.id) {
            td.completed = !td.completed;
          }
          console.log(id);
          return td;
        })
      )
    );
  };

  const submitDataHandler = (event) => {
    setgetValue("");
    dispatch(
      ADDTODO([
        ...myState,
        {
          id: myState.length,
          title: getValue,
          completed: false,
        },
      ])
    );
    // console.log(myState);
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        // id: myState.length,
        title: getValue,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    event.preventDefault();
  };

  const filterList = (keyword) => {
    setTodoList(
      myState.filter((val) => {
        // console.log(val);
        if (val.title.toLowerCase().includes(keyword.toLowerCase())) {
          return val;
        }
        return false;
      })
    );
  };

  const removeData = (id) => {
    const updatedData = todoList.filter((todo) => todo.id !== id);

    updatedData.map((val, index) => {
      val.id = index;
      return val;
    });
    // console.log(id);
    dispatch(ADDTODO(updatedData));
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    // .then((result)=>{
    //   result.json().then((resp)=>{
    //     console.log(resp);
    //   })
    // })
  };

  return (
    <>
      <div className="input">
        <form onSubmit={submitDataHandler}>
          {escpress && (
            <input
              className="one_input"
              required
              ref={inputData}
              type="text"
              placeholder={!isSearch ? "Add New" : "Search"}
              onChange={(e) => {
                setgetValue(e.target.value);
                if (isSearch) {
                  filterList(e.target.value);
                }
              }}
              value={getValue}
            />
          )}
          {complete ? (
            <div className="complete_task">
              <p className="complete_lable">There are no items.</p>
            </div>
          ) : null}
        </form>
        <div className="chk">
          <ul>
            {todoList?.map((td, index) => {
              // console.log(td)
              return (
                <li key={index}>
                  <div>
                    <label
                      className={td.completed ? "desiable todo" : "desiable"}
                    >
                      <input
                        type="checkbox"
                        checked={td.completed}
                        onChange={() => checkBoxDesable(td.id)}
                      />
                      {td.title}
                      <button
                        className="remove"
                        onClick={() => removeData(td.id)}
                      >
                        Remove
                      </button>
                    </label>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Input;
