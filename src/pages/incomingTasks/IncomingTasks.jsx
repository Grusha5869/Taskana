import { Footer, TaskList, MainContainer, Dropdown } from "@/components"
import style from "./incomingTasks.module.css"
import { classNameString } from '../../utils/helpers'

export default function IncomingTasks() {
    return (
        <main className={style.main}>
            <MainContainer>
                <section className={style.section}>
                    <div className={style.titleWrapper}>
                        <h1 className={classNameString('heading-h1', style.title)}>Входящие</h1>
                        <Dropdown />
                    </div>
                    <TaskList />
                </section>
            </MainContainer>
            <Footer />
        </main>
    )
}