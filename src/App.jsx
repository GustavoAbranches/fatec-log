import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className='flex justify-center items-center w-full h-96 bg-red-500'>
          <span className='text-white text-xl font-bold'>Imagem</span>
      </div>
    </>
  )
}

export default App
