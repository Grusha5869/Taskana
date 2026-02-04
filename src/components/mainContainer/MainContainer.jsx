import style from "./mainContainer.module.css"

export default function MainContainer({children}) {
    return (
        <div tabIndex={4} className={style.container}>
            {children}
        </div>
    )
}