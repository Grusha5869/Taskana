import style from "./taskListDone.module.css"

export default function TaskListDone() {
    return (
        <div className={style.wrapper}>
            <div>
                <h2 className={"heading-h2 " + style.subtitle}>Все твои задачи организованы как надо</h2>
                <p className={"body-lg-regular " + style.text}>Отличная работа! Ты большой молодец!</p>
            </div>
            <div className={style.imgWrapper}>
                <img src="./female.png" alt="Все задачи выполненны" className={style.img} />
            </div>
        </div>
    )
}