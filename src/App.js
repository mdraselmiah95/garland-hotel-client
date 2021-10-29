import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Gallery from "./pages/Home/Gallery/Gallery";
import Home from "./pages/Home/Home/Home";
import LogIn from "./pages/Login/Login/LogIn";
import NotFound from "./pages/NotFound/NotFound";
import OfferDetails from "./pages/OfferDetails/OfferDetails";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/offerDetails/:id">
            <OfferDetails />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
