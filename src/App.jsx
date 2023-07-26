import './App.css'
import Header from './components/Header'
import CallerID  from './components/CallerID'
import CloseFriends from './components/CloseFriends'

function App() {
  

  return (
   <div className=' container  mx-auto flex justify-center '>

    <div className='bg-slate-900 md:w-full lg:w-4/6 height place-center mt-12'>
    <Header />
    <CallerID/>

<div className='flex justify-center'>
<div className="mt-12 text-center w-40 h-36  bg-red-200 ">
      <h1>Stay Protected</h1>
      <h3>Allow TrueCaller to run in your backgroud...</h3>
      <p>Allow</p>
    </div>
</div>
   
   <CloseFriends/>

    </div>
 




   </div>
  )
}

export default App
