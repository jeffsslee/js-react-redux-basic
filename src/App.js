import "./App.css";
import Display from "./components/Display";
import Subscribers from "./components/Subscribers";

function App() {
  return (
    <div className="container mt-3 text-center">
      <div className="mb-5">
        <h3>React Redux Basic</h3>
      </div>
      <Subscribers />
      <hr />
      <Display />
    </div>
  );
}

export default App;
