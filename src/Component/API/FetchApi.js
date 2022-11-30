// import { useEffect } from "react";

// import { ADDTODO } from "../../Action/Index";
// import { useDispatch } from "react-redux";


// const FetchApi = () => {
//   const dispatch = useDispatch();


//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos/")
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch(ADDTODO(json));
//         console.log(json);
//       });
//   }, [dispatch]);

//   return(
//     <>
//     <div><button onClick={FetchApi}>API</button></div>
//     </>
//   )
// };

// export default FetchApi;
