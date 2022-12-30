import { Navbar } from "./components"
import { Home } from "./pages"
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="main">
        <Home />
      </main>
      <footer className="footer">
        <p>Dai Chekkal - Rapid Api</p>
      </footer>
    </div>
  )
}

export default App