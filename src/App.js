import "./App.css";
import Links from "./components/Links";
import Posts from "./components/Post";

function App() {
  return (
    <div className="Stack">
      <div className="MainScreen">

      <div className="Content">
        <Links></Links>
        <Posts></Posts>
      </div>
      </div>
      <div className="GreyPart"></div>
    </div>
  );
}

export default App;
