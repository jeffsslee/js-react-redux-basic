import "./App.css";
import Display from "./components/Display";
import Subscribers from "./components/Subscribers";
import Views from "./components/Views";

function App() {
  return (
    <div className="container mt-3 text-center">
      <div className="mb-5">
        <h3>React Redux Basic</h3>
      </div>
      <Subscribers />
      <hr />
      <Views />
      <hr />
      <Display />
    </div>
  );
}

export default App;
