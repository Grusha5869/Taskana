import style from './appLayout.module.css'
import { Content, Header } from "@/components"

export default function AppLayout({ children }) {
    return (
        <>
            <div className={style.layout}>
                <Header />
                <Content>
                    {children}  
                </Content>
            </div>
        </>
    )
}