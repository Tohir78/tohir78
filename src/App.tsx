import { useState } from 'react'
import tohir78Logo from '/Logo-Tohir78-512px.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://snapylink.xyz/daftartohir78" target="_blank">
          <img src={tohir78Logo} className="logo" alt="Tohir78 logo" />
        </a>
      </div>
      <h1>Tohir78 Game Online, Slot, dan Lotto Terpopuler 2025</h1>
      
      {/* Tombol Daftar dan Login */}
      <div className="auth-buttons">
        <a href="https://snapylink.xyz/daftartohir78" target="_blank">
          <button className="daftar-button">Daftar</button>
        </a>
        <a href="https://snapylink.xyz/daftartohir78" target="_blank">
          <button className="login-button">Login</button>
        </a>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Ketik di google TOHIR78
        </p>
      </div>
      <p className="read-the-docs">
        Klik logo TOHIR78 untuk menuju website paling tajir.
      </p>
    </>
  )
}

export default App
