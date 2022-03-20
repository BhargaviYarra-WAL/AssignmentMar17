import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import ProductApp from "./ProductServer";
import Forums from "./Forums";

const App = () => {
  return (
    <div className='App'>
      <h1>Welcome to Home Page</h1>
      <BrowserRouter>
        <div className='links'>
          <button className='btn1'>
            <Link to='/prod'>Products Application</Link>
          </button>

          <br />

          <button className='btn1'>
            <Link to='/forums'>Forums Application</Link>
          </button>

          <br />
        </div>

        <Routes>
          <Route path='/prod' element={<ProductApp />} />
          <Route path='/forums' element={<Forums />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
{
  /*
  <Link to='/todos'>TodoApp</Link>
        <br /><Routes>
          <Route path='/todos' element={<TodoApp />} />
</Routes>*/
}
