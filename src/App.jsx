import './App.css'
import Header from './components/Header'
import CallerID  from './components/Caller/CallerID'
import CloseFriends from './components/CloseFriends'

function App() {
  

  return (
   <div className=' container  mx-auto flex justify-center '>

    <div className='bg-slate-900 md:w-full lg:w-4/6 height place-center mt-12'>
    <Header />
    <CallerID/>

<div className='flex justify-center'>
<div className="mt-12 text-center w-96 h-36  bg-red-200">
      <h1 className="mb-8"> Stay Protected</h1>
      <h3 className="mb-8">Allow TrueCaller to run in your backgroud...</h3>
      <p className="mb-8">Allow</p>
    </div>
</div>
   
   <CloseFriends/>

    </div>
 




   </div>
  )
}

export default App
