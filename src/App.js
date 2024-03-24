import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Books from "./pages/books/Books";
import Sites from './pages/sites/Sites';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/sites" element={<Sites />} />
      </Routes>
    </div>
  );
}

export default App;
