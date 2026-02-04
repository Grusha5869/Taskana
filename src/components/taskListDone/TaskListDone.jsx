import style from "./taskListDone.module.css"
import Illustration from "../illustration/Illustration"
import { classNameString } from '../../utils/helpers'
import { useContext } from "react"
import { ThemeContext } from "@/context"

export default function TaskListDone() {
    const {theme} = useContext(ThemeContext)
    return (
        <div  className={style.wrapper}>
            <div>
                <h2 className={classNameString("heading-h2", style.subtitle, theme === 'light' ? style.subtitleLight : style.subtitleDark)}>Все твои задачи организованы как надо</h2>
                <p className={classNameString("body-lg-regular", style.text, theme === 'light' ? style.textLight : style.textDark)}>Отличная работа! Ты большой молодец!</p>
            </div>
            <div className={style.imgWrapper}>
                <Illustration 
                    name='female' 
                    fill300={theme === 'light' ? 'var(--neutral-light-300)' : 'var(--neutral-dark-300)'} 
                    fill900={theme === 'light' ? 'var(--neutral-light-900)' : 'var(--neutral-dark-900)'}
                    fillPrimary100={'var(--primary-100)'}
                    fillPrimary300={'var(--primary-300)'}
                    fillPrimary400={'var(--primary-400)'}
                />
            </div>
        </div>
    )
}