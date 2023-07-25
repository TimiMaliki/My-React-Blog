import './App.css'
import Header from './components/Header'
import CallerID from './components/CallerID'
import CloseFriends from './components/CloseFriends'
import Index from './styles/index.module.scss'
function App() {
 

  return (
    <>
    <div className={Index}>
    <Header />
    <CallerID />

    <div className={Index.TrueCallerAllow}>
      <h1>Stay Protected</h1>
      <h3>Allow TrueCaller to run in your backgroud...</h3>
      <p>Allow</p>
    </div>
    </div>

    <CloseFriends/>
    </>
  )
}

export default App
