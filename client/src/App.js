import logo from "./logo.svg";
import "./App.css";

function App() {
  // const [home ,setHome] = useState();
  const myClick = async () => {
    let response = await fetch("/home");
    //let res = await response.json()
    console.log(response);
    return response;
  };

  return (
    <div className="App">
      <button onClick={myClick}>botton</button>
    </div>
  );
}

export default App;
