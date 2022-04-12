import "./App.css";
import Home from "./views/home";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" element={<Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
