// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

import Router from "./Router";
import "./styles.scss";

export default function App() {
  const routes = [
    { path: "/", component: <Home /> },
  ];
  const defaultComponent = <NotFound />;

  return (
    <>
      <Router routes={routes} defaultComponent={defaultComponent} />
    </>
  );
}
