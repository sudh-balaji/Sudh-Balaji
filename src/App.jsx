import React from 'react'

import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen">
        <Header />
        <main className="container px-8">
          <About />
        </main>
        <Projects />
      </div>
    </>
  )
}

export default App
