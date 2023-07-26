import './App.css'
import Header from './components/Header'
import Index  from './components/Caller/Index'


function App() {
  

  return (
   <div className=' container  mx-auto flex justify-center '>

    <div className='bg-slate-900 md:w-full lg:w-4/6 height place-center mt-12'>
    <Header />
    <Index/>
    </div>
 




   </div>
  )
}

export default App
