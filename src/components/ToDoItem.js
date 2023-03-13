function ToDoItem(props) {

    function deleteExistingItem() {
        props.onChecked(props.id);
    }

    return (
        <div onClick={deleteExistingItem}>
            <li>{props.text}</li>
        </div>
    );
}

export default ToDoItem;