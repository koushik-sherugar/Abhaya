import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-bootstrap";
import Route from "./routes/routes"
import Header from "./pages/Header"
function App() {
  return (
    <div className="App">
        <Header/>
        <Route/>
    </div>
  );
}

export default App;
