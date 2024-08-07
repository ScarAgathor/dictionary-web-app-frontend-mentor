
function NotFound(props) {

    return(
        <section className="notFound">
            <p>☹️</p>
            <p className="notFound__title" data-notFound-title>{props.content.title}</p>
            <p className="notFound__message">{props.content.message} {props.content.resolution}</p>
        </section>
    )
}

export default NotFound