import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/signin" element={<SignInPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
