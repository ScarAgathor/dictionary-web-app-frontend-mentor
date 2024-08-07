import Definition from "./Definition"
import NotFound from "./NotFound"

function DictionaryView(props) {
    if(props.data.length != 0) {
        if(props.data.title != null) {
            return(<NotFound content={props.data}/>)
        }
        else {
            return(<Definition content={props.data}/>)
        }
    } 
}

export default DictionaryView