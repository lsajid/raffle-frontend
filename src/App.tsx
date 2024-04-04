import { Routes, Route } from "react-router-dom" 
import Home from "./pages/Home"
import NotFound from "./pages/NotFound";
import RaffleInfo from "./pages/RaffleInfo";
import './App.css'
import Nav from "./components/Nav";

export function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={< Home />}/>
        <Route path="/raffles/:id" element={< RaffleInfo />}/>
        <Route path="/raffles/:id/participant" element={< RaffleInfo />}/>
        <Route path="/raffles/:id/winner" element={< RaffleInfo />}/>
        <Route path="*" element={< NotFound />}/>
      </Routes>
    </>
  );
}

export default App
