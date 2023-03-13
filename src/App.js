import './App.css';
import {useState} from "react";
import InputArea from "./components/InputArea";

function App() {
    const [items, setItems] = useState([]);

    function addItem(inputText) {
        setItems(prevItems => {
            return [...prevItems, inputText];
        });
    }

    function deleteItem(itemId) {
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== itemId;
            });
        });
    }

    return (
        <div>
            <h1>To Do List</h1>
            <div>
                <InputArea
                    onAdd={addItem}
                />
            </div>
        </div>
    );
}

export default App;
