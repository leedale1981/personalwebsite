import React from "react";
import { Divider, Container } from "@material-ui/core";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TechnologyPage from "./pages/TechnologyPage";
import HomePage from "./pages/HomePage";
import PhysicsPage from "./pages/PhysicsPage";
import FlyingPage from "./pages/FlyingPage";
import SailingPage from "./pages/SailingPage";
import DivingPage from "./pages/DivingPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Container className='Container'>
            <Header />
          </Container>
        </header>
        <Divider />
        <body>
          <Container className="Container">
            <Switch>
              <Route exact path="/" render={
                (props) => <HomePage />
              } />
              <Route exact path="/tech" render={
                (props) => <TechnologyPage />
              } />
              <Route exact path="/physics" render={
                (props) => <PhysicsPage />
              } />
              <Route exact path="/flying" render={
                (props) => <FlyingPage />
              } />
              <Route exact path="/sailing" render={
                (props) => <SailingPage />
              } />
              <Route exact path="/diving" render={
                (props) => <DivingPage />
              } />
            </Switch>
          </Container>
          <Divider />
        </body>
        <footer className="App-Footer">
          <Container className="Container">
            <Footer />
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;
