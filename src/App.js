import './App.scss';
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Authors() {
  return <h2>Authors</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/authors">
          <Authors />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
=======
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Footer />
>>>>>>> dev
  );
}

export default App;
