import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./Success";
import Pay from "./Pay";

const App = () => {
    return (
        <Router>
          <Routes>
            <Route 
            path="/Pay" 
            element={<Pay />} 
            />
            <Route 
            path="/Success" 
            element={<Success />} 
            />
          </Routes>
      </Router>
    );
};

export default App
