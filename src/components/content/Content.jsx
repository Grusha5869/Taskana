import style from "./content.module.css"

export default function Content({ children }) {
    return (
        <div className={style.content}>
            {children}
        </div>
    )
}