export function Post(props) {
    const { name } = props;

    return (
        <h2>
            {name} <button onClick={props.delete}>delete</button>
        </h2>
    );
}
