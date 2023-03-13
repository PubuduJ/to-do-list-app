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
        <div>
            <input onChange={handleChange} type="text" value={inputText}/>
            <button onClick={addNewItem}>Add</button>
        </div>
    );
}

export default InputArea;