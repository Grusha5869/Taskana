import style from "./mainContainer.module.css"

export default function MainContainer({children}) {
    return (
        <main className={style.container}>
            {children}
        </main>
    )
}