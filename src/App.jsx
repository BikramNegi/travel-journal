import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

function App() {
  return (
    <>
      <Header/>
      {data && data.map((entry) => {
        return <Entry key={entry.id} {...entry}/>
      })}
    </>
  )
}

export default App
