import './App.css';
import {useState} from "react";

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
        <>
            <h1>Hello React</h1>
        </>
    );
}

export default App;
