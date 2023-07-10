import { useState } from "react"

import getAns from "../helpers/getAns";

export default function InputBox({ setAns }) {

    const [ques, setQues] = useState("Ask Ques");



    const onchangeHandler = (event) => {

        setQues(event.target.value);
        // console.log(event.target);
    }

    const submitHandler = (event) => {
        
        event.preventDefault();
        getAns(ques)
            .then(ans => setAns(ans))
            .catch(err => console.log(err));
    }

    return (

        <div>
            <form action="" onSubmit={submitHandler}>
            <input type="text" value={ques} onChange={onchangeHandler} />
            </form>
        </div>
    )
}