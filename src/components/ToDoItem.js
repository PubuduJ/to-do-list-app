function ToDoItem(props) {

    function deleteExistingItem() {
        props.onChecked(props.id);
    }

    return (
        <div className={"to-do-item-container"} onClick={deleteExistingItem}>
            <li>{props.text}</li>
        </div>
    );
}

export default ToDoItem;