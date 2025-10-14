import { useState } from 'react'
import SmokeyCursor from "./components/lightswind/smokey-cursor";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <SmokeyCursor />
    </div>
  )
}

export default App
