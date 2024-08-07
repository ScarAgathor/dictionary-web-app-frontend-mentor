import { useState, useEffect } from "react"
import Header from "./Header"
import DictionaryView from "./DictionaryView"

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    const body = document.querySelector('body')
    const theme = window.matchMedia("(prefers-color-scheme: dark)");
    const themeButton = document.getElementById('check');
    const moonIcon = document.querySelector('[data-moon-icon]')
    const currentFont = document.querySelector('[data-current-font]')
    const optionDropdown = document.querySelector('[data-status]')
    const fontNames = document.querySelectorAll('[data-font-name]')
    const form = document.querySelector('form')
    const notFoundTitle = document.querySelector('[data-notfound-title]')
    const searchedWord = document.querySelector('[data-word]')
    const wordSrc = document.querySelector('[data-src]')
    const poSpeechDef = document.querySelectorAll('[data-pos-def]')

    if(theme.matches) {
      setDarkTheme();
      themeButton.checked = true;
    } else if(!theme.matches) {
      setLightTheme();
      themeButton.checked = false;
    }

    themeButton.addEventListener('click', () => {
      if(themeButton.checked) {
        setDarkTheme()
      } else if(!themeButton.checked) {
        setLightTheme()
      }
    })

    function setDarkTheme() {
      body.classList.add('body--dark')
      body.classList.remove('body--light')
      moonIcon.classList.add('moon__icon--dark')
      moonIcon.classList.remove('moon__icon--light')
      currentFont.classList.add('current__font--dark')
      currentFont.classList.remove('current__font--light')
      optionDropdown.classList.add('option__dropdown--dark')
      optionDropdown.classList.remove('option__dropdown--light')

      fontNames.forEach(name => {
        name.classList.add('font__name--dark')
        name.classList.remove('font__name--light')
      })

      form.classList.add('form--dark')
      form.classList.remove('form--light')

      if(notFoundTitle != null) {
        notFoundTitle.classList.add('notFound__title--dark')
        notFoundTitle.classList.remove('notFound__title--light')
      }

      if(searchedWord != null) {
        searchedWord.classList.add('word--dark')
        searchedWord.classList.remove('word--light')
      }           

      if(wordSrc != null) {
        wordSrc.classList.add('src--dark')
        wordSrc.classList.remove('src--light')
      }   

      if(poSpeechDef.length != 0) {
        poSpeechDef.forEach(def => {
          def.classList.add('li--dark')
          def.classList.remove('li--light')
        })
      } 
    }

    function setLightTheme() {
      body.classList.add('body--light')
      body.classList.remove('body--dark')
      moonIcon.classList.add('moon__icon--light')
      moonIcon.classList.remove('moon__icon--dark')
      currentFont.classList.add('current__font--light')
      currentFont.classList.remove('current__font--dark')
      optionDropdown.classList.add('option__dropdown--light')
      optionDropdown.classList.remove('option__dropdown--dark')
      
      fontNames.forEach(name => {
        name.classList.add('font__name--light')
        name.classList.remove('font__name--dark')
      })

      form.classList.add('form--light')
      form.classList.remove('form--dark')

      if(notFoundTitle != null) {
        notFoundTitle.classList.add('notFound__title--light')
        notFoundTitle.classList.remove('notFound__title--dark')
      }

      if(searchedWord != null) {
        searchedWord.classList.add('word--light')
        searchedWord.classList.remove('word--dark')
      }

      if(wordSrc != null) {
        wordSrc.classList.add('src--light')
        wordSrc.classList.remove('src--dark')
      }   

      if(poSpeechDef.length != 0) {
        poSpeechDef.forEach(def => {
          def.classList.add('li--light')
          def.classList.remove('li--dark')
        })
      }       
    }
  })

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
