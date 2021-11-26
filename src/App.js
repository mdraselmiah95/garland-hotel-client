import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import AddSport from "./pages/AddSport/AddSport";
import Gallery from "./pages/Home/Gallery/Gallery";
import Home from "./pages/Home/Home/Home";
import LogIn from "./pages/Login/Login/LogIn";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Login/Register/Register";
import ManageSports from "./pages/ManageSports/ManageSports";
import NotFound from "./pages/NotFound/NotFound";
import OfferDetails from "./pages/OfferDetails/OfferDetails";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/offerDetails/:id">
              <OfferDetails />
            </PrivateRoute>
            <PrivateRoute path="/addSport">
              <AddSport />
            </PrivateRoute>
            <PrivateRoute path="/manageSports">
              <ManageSports />
            </PrivateRoute>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
