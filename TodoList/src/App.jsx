
import './App.css'
import CreateTodo from './components/CreateTodo'
import Navbar from './components/Navbar'
import NichtWichtigUndDringend from './components/NichtWichtigUndDringend'
import NichtWichtigUndNichtDringend from './components/NichtWichtigUndNichtDringend'
import WichtigUndDringend from './components/WichtigUndDringend'
import WichtigUndNichtDringend from './components/WichtigUndNichtDringend'

function App() {
  
  return (
    <>
    <Navbar />
    <WichtigUndDringend />
    <WichtigUndNichtDringend/>
    <NichtWichtigUndDringend />
    <NichtWichtigUndNichtDringend />
    <CreateTodo />
     </>
  )
}

export default App
