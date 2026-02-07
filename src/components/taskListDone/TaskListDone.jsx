import style from "./taskListDone.module.css"
import Illustration from "../illustration/Illustration"
import { classNameString } from '../../utils/helpers'

export default function TaskListDone() {
    return (
        <div  className={style.wrapper}>
            <div>
                <h2 className={classNameString("heading-h2", style.subtitle)}>Все твои задачи организованы как надо</h2>
                <p className={classNameString("body-lg-regular", style.text)}>Отличная работа! Ты большой молодец!</p>
            </div>
            <div className={style.imgWrapper}>
                <Illustration name='female' />
            </div>
        </div>
    )
}