import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Layout from './pages/MainLayout'
import FlowbiteExample1 from './components/FlowbiteExample1';

export function App() {
  
  return (
    <>
    <Layout children={[<FlowbiteExample1/>]} />
    </>
  )
}
