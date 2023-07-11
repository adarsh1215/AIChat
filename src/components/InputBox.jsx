import { useState } from "react"

import getAns from "../helpers/getAns";

import "./inputBox.css"

export default function InputBox({ setChatStack, chatStack, setIsLoading }) {

    const [ques, setQues] = useState("");

    function addToChatStack(from, text) {

        setChatStack(stack => [...stack, {from: from, text: text}]);
    }

    const onchangeHandler = (event) => {

        setQues(event.target.value);
    }

    const submitHandler = (event) => {
        
        event.preventDefault();
        if(ques == "") return;
        setIsLoading(true);
        addToChatStack("user", ques);
        getAns(ques)
            .then(ans => addToChatStack("ai", ans))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
        setQues("");
    }

    return (

        <div className = {`inputBox ${chatStack.length == 0? "emptyStack" : ""}`}>
            <form action="" onSubmit={submitHandler} id = "inputForm">
            <input type="search" placeholder="Ask Question" id = "searchBox" autoComplete="off" value={ques} onChange={onchangeHandler} />
            </form>
        </div>
    )
}