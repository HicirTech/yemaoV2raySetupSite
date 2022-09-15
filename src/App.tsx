import "./App.css";
import reactLogo from "./assets/react.svg";

const App = () =>{

  return (
    <div className="App">
      <div>
        <a href="#" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>腋毛下载站 进入维护模式!</h1>
    </div>
  );
}

export default App;
