import './App.css';
import {useState} from "react";
import InputArea from "./components/InputArea";
import ToDoItem from "./components/ToDoItem";

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
        <div className={"container"}>
            <div className={"heading"}>
                <h1>To Do List</h1>
            </div>
            <InputArea
                onAdd={addItem}
            />
            <div>
                <ul>
                    {items.map((toDoItem, index) => {
                       return <ToDoItem
                           key={index}
                           id={index}
                           text={toDoItem}
                           onChecked={deleteItem}
                       />
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;
