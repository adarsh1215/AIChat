import MessageBox from "./messageBox/messageBox";
import { useEffect } from "react";

import "./outputBox.css"
import EmptyStack from "./template/EmptyStack";

export default function OutputBox({ chatStack }) {

    return (

        <div id = "outputBox">
            {   
                chatStack.map((item, index) => {
                    return <MessageBox key={index} item={item} />
                })
            }
        </div>
    )
}