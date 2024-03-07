import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewList from "./components/NewList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<NewList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
