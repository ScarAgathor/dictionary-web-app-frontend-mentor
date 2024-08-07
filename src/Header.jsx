import { useState, useEffect } from "react"

function Header(props) {
    const body = document.querySelector('body')
    const [currentFont, setCurrentFont] = useState('Inconsolata')

    function inconsolata() {
        body.classList.add('body-inconsolata')
        body.classList.remove('body-inter')
        body.classList.remove('body-lora')
        setCurrentFont('Inconsolata')
    }

    function inter() {
        body.classList.add('body-inter')
        body.classList.remove('body-inconsolata')
        body.classList.remove('body-lora')
        setCurrentFont('Inter')
    }

    function lora() {
        body.classList.add('body-lora')
        body.classList.remove('body-inconsolata')
        body.classList.remove('body-inter')
        setCurrentFont('Lora')
    }

    function displayDropdown(event) {
        const optionDropdown = event.target.parentElement.nextElementSibling
        if(optionDropdown.dataset.status == 'closed') {
            optionDropdown.classList.remove('option__dropdown--status');
            optionDropdown.dataset.status = 'opened';
        } else if(optionDropdown.dataset.status == 'opened') {
            optionDropdown.classList.add('option__dropdown--status');
            optionDropdown.dataset.status = 'closed';
        }
    }

    function handleFocus(event) {
        event.target.parentElement.parentElement.classList.add('form--focus')

        event.target.addEventListener('focus', () => {
            event.target.parentElement.parentElement.classList.remove('form--error')
            event.target.parentElement.parentElement.nextElementSibling.classList.add('error--display')
        })

        event.target.addEventListener('focusout', () => {
            event.target.parentElement.parentElement.classList.remove('form--focus')
        })
    }

    useEffect(() => {
        const theme = window.matchMedia("(prefers-color-scheme: dark)");
        const themeButton = document.getElementById('check');
        const moonIcon = document.querySelector('[data-moon-icon]')
        const currentFont = document.querySelector('[data-current-font]')
        const optionDropdown = document.querySelector('[data-status]')
        const fontNames = document.querySelectorAll('[data-font-name]')
        const form = document.querySelector('form')

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
        }
    }, [])

    
    return(
        <header>
            <div className="header__top">
                <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38"><g fill="none" fillRule="evenodd" stroke="#838383" strokeLinecap="round" strokeWidth="1.5"><path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28"/><path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8"/><path d="M11 9h12"/></g></svg>

                <div className="header__buttons">
                    <div className="font__control">
                        <button className="font" onClick={displayDropdown}>
                            <span className="selected__font" data-current-font>{currentFont}</span>
                            <svg className="arrow__icon" xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8"><path fill="none" stroke="#A445ED" strokeWidth="1.5" d="m1 1 6 6 6-6"/></svg>
                        </button>
                        <div className="option__dropdown option__dropdown--status" data-status="closed">
                            <button className="option" onClick={inconsolata} data-font-name>
                                <span className="font__name--inconsolata" >Inconsolata</span>
                            </button>
                            <button className="option" onClick={inter} data-font-name>
                                <span className="font__name--inter" >Inter</span>
                            </button>
                            <button className="option" onClick={lora} data-font-name>
                                <span className="font__name--lora">Lora</span>
                            </button>
                        </div>
                    </div>

                    <div className="header__line"></div>

                    <div className="theme__controls">
                        <label className="toggle" htmlFor="check">
                            <input type="checkbox" id="check" name="check" />
                            <span className="toggle__slider"></span>
                        </label>
                        <svg data-moon-icon xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
                    </div>
                </div>
            </div>

        <div>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="search">
                    <input type="text" name="search" id="search" onFocus={handleFocus}/>
                </label>
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="none" stroke="#A445ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/></svg>
                </button>
            </form>
            <p className="error error--display">Whoops, can’t be empty…</p>
        </div>
        </header>
    )
}

export default Header