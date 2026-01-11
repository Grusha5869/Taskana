import style from './appLayout.module.css'
import Header from "../../components/header/Header.jsx"
import NavBar from "../../components/navBar/NavBar.jsx"
import SideBar from "../../components/sideBar/SideBar.jsx"
import Content from '../../components/content/Content.jsx'

export default function AppLayout({ children }) {
    return (
        <>
            <div className={style.layout}>
                <Header />
                <Content>
                    <NavBar />
                    {children}
                    <SideBar />
                </Content>
            </div>
        </>
    )
}