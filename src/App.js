import "./App.css";
import Bars from "./components/Bars";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <div className="text-white text-2xl text-center font-bold tracking-wide mb-10">
        My status
      </div>
      <Bars />
      <Tasks />
    </div>
  );
}

export default App;
