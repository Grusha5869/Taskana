import { Footer, TaskList, MainContainer } from "@/components"
import style from "./incomingTasks.module.css"
import { ThemeContext } from '@/context'
import { classNameString } from '../../utils/helpers'
import { useContext } from "react"

export default function IncomingTasks() {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <main className={classNameString(style.main, theme === 'light' ? style.mainLight : style.mainDark)}>
            <MainContainer>
                <h1 className={classNameString('heading-h1', style.title, theme === 'light' ? style.titleLight : style.titleDark)}>Входящие</h1>
                
                <TaskList />
            </MainContainer>
            <Footer />
        </main>
    )
}