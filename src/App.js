import { Container } from "semantic-ui-react";
import Dashboard from "./layouts/Dashboard";
import './App.css'

function App() {
  return (
    <div className="App">
      <Container className="main">
        <Dashboard/>
      </Container>
    </div>
  );
}

export default App;
