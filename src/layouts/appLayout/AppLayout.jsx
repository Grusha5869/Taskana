import style from './appLayout.module.css'
import Header from "../../components/header/Header.jsx"
import NavBar from "../../components/navBar/NavBar.jsx"
import IncomingTasks from "../../pages/incomingTasks/IncomingTasks.jsx"
import SideBar from "../../components/sideBar/SideBar.jsx"

export default function AppLayout({ children }) {
    return (
        <>
            <Header />
            <div className={style.content}>
                <NavBar />
                <IncomingTasks />
                <SideBar />
            </div>
        </>
    )
}