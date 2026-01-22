import { Footer, TaskList, MainContainer } from "@/components"
import style from "./incomingTasks.module.css"

export default function IncomingTasks() {
    return (
        <main className={style.section}>
            <MainContainer>
                <h1 className={'heading-h1 ' + style.title}>Входящие</h1>
                <TaskList />
            </MainContainer>
            <Footer />
        </main>
    )
}