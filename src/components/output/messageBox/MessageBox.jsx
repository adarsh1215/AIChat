import "./messageBox.css"

export default function MessageBox({ item }) {

    return (

        <div id = "messageBox" className = {item.from}>
            <p>{item.text}</p>
        </div>
    )
}