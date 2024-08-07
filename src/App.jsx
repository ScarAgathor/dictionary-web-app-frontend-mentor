import { useState } from "react"
import Header from "./Header"
import DictionaryView from "./DictionaryView"

function App() {

  const [data, setData] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    let word = event.target.firstElementChild.firstElementChild

    if(word.value == '') {
      event.target.classList.add('form--error')
      event.target.nextElementSibling.classList.remove('error--display')
    } else if(word.value != '') {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setData(data)
      })
    }
  }

  return (
    <>
      <Header handleSubmit={handleSubmit}/>
      <DictionaryView data={data.length != 0 ? data : []}/> 
    </>
  )
}

export default App
