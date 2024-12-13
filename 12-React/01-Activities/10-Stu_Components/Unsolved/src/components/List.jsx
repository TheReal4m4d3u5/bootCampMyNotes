function List(props) {
    return (
        <ul className="list-group">
            {props.groceries.map((item) => (
                <li
                    style={
                        {
                            textDecoration: item.purchased ? 'line-through' : 'none'
                        }
                    }
                    key={item.id}
                    className="list-group-item"
                >
                    {item.name}
                </li>
            ))
            }
        </ul>
    );
}

export default List;
