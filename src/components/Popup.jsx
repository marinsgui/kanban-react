import style from './Popup.module.css';

export default function Popup() {
    return (
        <div className={style.popup_container}>
            <div className="popup-content">
                <input type="text" name="task" id="task" placeholder="Digite o nome da tarefa" />
            </div>
        </div>
    )
}