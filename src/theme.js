function theme() {
    const theme = window.matchMedia("(prefers-color-scheme: dark)");
    const body = document.querySelector('body')
    const themeButton = document.getElementById('check');
    const moonIcon = document.querySelector('[data-moon-icon]')
    const currentFont = document.querySelector('[data-current-font]')
    const optionDropdown = document.querySelector('[data-status]')
    const fontNames = document.querySelectorAll('[data-font-name]')
    const form = document.querySelector('form')
    const notFoundTitle = document.querySelector('[data-notfound-title]')

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
        notFoundTitle.classList.add('notFound__title--dark')
        notFoundTitle.classList.remove('notFound__title--light')
        
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
        notFoundTitle.classList.add('notFound__title--light')
        notFoundTitle.classList.remove('notFound__title--dark')
    }

}

