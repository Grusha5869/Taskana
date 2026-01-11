import MainContainer from "../../components/mainContainer/MainContainer"
import Footer from "../../components/footer/Footer"
import TaskList from "../../components/taskList/TaskList"
import style from "./incomingTasks.module.css"

export default function IncomingTasks() {
    return (
        <section className={style.section}>
            <MainContainer>
                <h1 className={'heading-h1 ' + style.title}>Входящие</h1>
                <TaskList />
            </MainContainer>
            <Footer />
        </section>
    )
}