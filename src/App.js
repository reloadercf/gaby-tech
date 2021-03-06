import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './componets/home/Home';
import Purchase from './componets/purchase/PurchaseView';
import Footer from './componets/common/Footer';
import Navbar from './componets/common/Navbar';
import './App.css'


function App() {
  
  return (
    <Router>

    <div className="App">
      <Navbar />   
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/purchase">
              <Purchase />
            </Route>
        </Switch>
      <Footer />  
    </div>

    </Router>
  );
}

export default App;
