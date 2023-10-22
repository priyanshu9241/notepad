import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { FcSearch } from "react-icons/fc";
// import History from "./History.jsx";

function App() {
  // localStorage.clear();
  // let saves = JSON.parse(localStorage.getItem("notepad")) || [];
  // const [historyList, setHistoryList] = useState(
  //   JSON.parse(localStorage.getItem("notepad"))
  // );
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const LOCAL_STORAGE_KEY = "notepad";
  // useEffect(() => {

  //   return () => {
  //    saves=historyList
  //   }
  // }, [saves])

  let saves = [];
  // let saves = Array.from(localStorage.getItem(LOCAL_STORAGE_KEY));
  return (
    <>
      <div className="search">
        <input type="text" placeholder="Search"></input>
        {/* <FcSearch /> */}
      </div>
      <h1>Notepad</h1>
      <div className="notepad ">
        <textarea className="input-area"></textarea>
        <div className="btns">
          <button
            className="save-btn"
            onClick={() => {
              let input = document.querySelector(".input-area").value;
              saves.push(input);
              localStorage.setItem(
                `${LOCAL_STORAGE_KEY}`,
                JSON.stringify(saves)
              );
              // setCount(count + 1);
              // setInput("");
            }}
          >
            Save
          </button>
          <button
            className="clear-btn"
            onClick={() => {
              document.querySelector(".input-area").value = "";
            }}
          >
            clear
          </button>
        </div>
      </div>
      {/* let demp=localStorage.getItem(`${LOCAL_STORAGE_KEY}`)
      {console.log(demp)} */}
      {/* <div> {console.log(saves)}</div> */}
      {/* saves.forEach((save) => {}); */}
      {/* <div>   {console.log(saves)}</div> */}
      {/* <h2>History</h2>
      <div>
        <History saves={saves} />
      </div>  */}
      
    </>
  );
}

export default App;
