import MainContainer from "../../components/mainContainer/MainContainer"
import Footer from "../../components/footer/Footer"
import TaskList from "../../components/taskList/TaskList"

export default function IncomingTasks() {
    return (
        <>
            <MainContainer>
                <h1>Заголовок</h1>
                <TaskList />
            </MainContainer>
            <Footer />
        </>
    )
}