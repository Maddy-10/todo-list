import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewList from "./components/NewList";
import { TodoContextProvider } from "./context/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<NewList/>}/>
        </Routes>
      </BrowserRouter>
      </TodoContextProvider>
    </div>
  );
}

export default App;
