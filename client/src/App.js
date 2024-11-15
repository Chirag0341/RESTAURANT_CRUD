import logo from './logo.svg';
import { Navigate, RouterProvider,createBrowserRouter } from 'react-router-dom';
import './App.css';
import Add from "./components/addrestaurant/Add";
import Getrestaurant from "./components/getrestaurant/getrestaurant";
import Edit from './components/updaterestaurant/Edit';

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
function App() {
  const route=createBrowserRouter([
    {
    path: '/add',
    element:<Add/>
  },
  {
    path: '/',
    element:<Getrestaurant/>
  },
  {
  path:'/getOne/:id',
  element:<Getrestaurant/>
  },
  {
    path: '/update/:id',
    element:<Edit/>
  }
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App;
