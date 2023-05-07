import React from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Header from './components/Header'
const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden relative font-Jakarta'>
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App