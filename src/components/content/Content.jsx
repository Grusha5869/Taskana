import style from "./content.module.css"
import { NavBar, SideBar, TaskEditor } from "@/components"

export default function Content({ children }) {
    return (
        <div className={style.content}>
            <NavBar />
            {children}
            <SideBar />
            <TaskEditor />
        </div>
    )
}