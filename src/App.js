import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserComponent from "./components/user/user.component";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
