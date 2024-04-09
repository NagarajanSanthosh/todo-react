
import React from "react";
import Todo from "./Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form"
import SignUp from "./SignUp"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todo />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;