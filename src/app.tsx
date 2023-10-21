import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Layout from './pages/MainLayout'
import FlowbiteExample1 from './components/FlowbiteExample1';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout children={[<FlowbiteExample1/>]} />
    </>
  )
}
