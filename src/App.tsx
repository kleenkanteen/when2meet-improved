import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// @ts-ignore
import MultipleDatesPicker from '@ambiot/material-ui-multiple-dates-picker'

function App() {
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
      <button onClick={() => setOpen(!open)}>
        Select Dates
      </button>
      <MultipleDatesPicker
        open={open}
        selectedDates={[]}
        onCancel={() => setOpen(false)}
        onSubmit={(dates: Date[]) => console.log('selected dates', dates)}
      />
    </div>
      <h1 className="text-3xl font-bold text-blue-600">
      Install & Setup Vite + React + Typescript + Tailwind CSS 3
      </h1>
      <Home />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </LocalizationProvider>

  )
}

export default App
