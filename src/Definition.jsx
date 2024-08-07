
function Word(props) {

    let audio = ''
    let phonetics = props.content[0].phonetics

    for(let i = 0; i < phonetics.length; i++) {
        if(phonetics[i].audio != '') {
            audio = new Audio(phonetics[i].audio)
            break;
        }
    }

    function play() {
        try {
            audio.play()
        } catch (TypeError) {
            window.alert('Sound Not Available')
        }
    }

    const nounDefinitions = props.content[0].meanings[0].definitions.map(definition => <li key={definition.definition} data-pos-def>{definition.definition}</li>)
    const verbDefinitions = props.content[0].meanings[1].definitions.map(definition => <li key={definition.definition} data-pos-def>{definition.definition} <br /> <span>"{definition.example}" </span> </li>)


    console.log(props.content)

    return(
        <section className="word">
            <div className="word__intro">
                <div className="word__intro__text">
                    <h1 data-word>{props.content[0].word}</h1>
                    <p>{props.content[0].phonetic}</p>
                </div>
                <button onClick={play}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fillRule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>
                </button>
            </div>


            <div className="poSpeech">
                <div className="poSpeech__intro">
                    <h2>{props.content[0].meanings[0].partOfSpeech}</h2>
                    <div className="poSpeech__line"></div>
                </div>
                
                <ul className="poSpeech__definitions">
                    <p className="poSpeech__meaning">Meaning</p>
                    {nounDefinitions}
                </ul>
            </div>

            <p className="word__synonym">Synonyms <a href="#">{props.content[0].meanings[0].synonyms[0]}</a></p>

            <div className="poSpeech">
                <div className="poSpeech__intro">
                    <h2>{props.content[0].meanings[1] != undefined ? props.content[0].meanings[1].partOfSpeech : ''}</h2>
                    <div className="poSpeech__line"></div>
                </div>
                
                <ul className="poSpeech__definitions">
                    <p className="poSpeech__meaning">Meaning</p>
                    {verbDefinitions}
                </ul>
            </div>

            <p className="word__source">Source <a target='_blank' href={props.content[0].sourceUrls[0]} data-src>{props.content[0].sourceUrls[0]}
            </a><img src="../src/assets/images/icon-new-window.svg" alt="" /></p>

        </section>
    )
}

export default Word