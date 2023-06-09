import {useState} from "react";

function InputArea(props) {
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function addNewItem() {
        props.onAdd(inputText);
        setInputText("");
    }

    return (
        <div className={"form"}>
            <input onChange={handleChange} type="text" value={inputText}/>
            <button onClick={addNewItem}><span>Add</span></button>
        </div>
    );
}

export default InputArea;