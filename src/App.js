import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import GetMovies from './GetMovies';
const routerConfig = createBrowserRouter([
  {
    path:"/getmovies",
    element:<GetMovies/>
  },
  {
    path:"/",
    element:<GetMovies/>
  }
])
function App() {
  return (
    <div className="App">
      <h1>this is app js coponent</h1>
      <RouterProvider router={routerConfig}/>
    </div>
  );
}

export default App;
