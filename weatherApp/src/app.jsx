import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.css'
import FetchWeather from './fetch/fetchWeather'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="day-forecast">
        <a href="#Monday">Monday</a>
        <a href="#Tuesday">Tuesday</a>
        <a href="#Wednesday">Wednesday</a>
        <a href="#Thursday">Thursday</a>
        <a href="#Friday">Friday</a>
        <a href="#Saturday">Saturday</a>
        <a href="#Sunday">Sunday</a>
      </div>
      <h1>Weather App</h1>
      <div class="card">
        <div>
          <input ></input>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <FetchWeather />
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Group 60 
      </p>
    </>
  )
}