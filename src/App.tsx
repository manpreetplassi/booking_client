import { useState } from 'react'
import './App.css'
import Admin from './components/dashboard/Admin'
import DefaultLayout from './components/DefaultLayout'

function App() {

  return (
    <>
      <div>
        <DefaultLayout>
        <Admin></Admin>
        </DefaultLayout>
      </div>
    </>
  )
}

export default App
