export default function TaskCard(props) {

    const addTask = () => {
        console.log('funcionando')
        props.onAddTask('Nova tarefa')
    }

    return (
        <div className={props.className}>
            <h2>{props.title}</h2>
            {props.task.map(item => (
                <p>{item}</p>
            ))}
            <button onClick={addTask}>Adicionar nova tarefa</button>
        </div>
    )
}