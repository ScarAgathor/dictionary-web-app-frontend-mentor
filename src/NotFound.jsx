
function NotFound(props) {

    return(
        <section className="notFound">
            <p className="notFound__img">☹️</p>
            <h2 className="notFound__title" data-notfound-title>{props.content.title}</h2>
            <p className="notFound__message">{props.content.message} {props.content.resolution}</p>
        </section>
    )
}

export default NotFound