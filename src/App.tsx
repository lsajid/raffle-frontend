import { Routes, Route } from "react-router-dom" 
import Home from "./pages/Home"
import NotFound from "./pages/NotFound";
import RaffleInfo from "./pages/RaffleInfo";
import './App.css'
import Nav from "./components/raffle/Nav";
import { Button } from "@/components/ui/button"

export function App() {
  return (
    <>
      <Nav />
      <Button>Hello world</Button>
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
