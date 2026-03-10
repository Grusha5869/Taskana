import { useEffect, useState } from "react"
import style from "./dropdown.module.css"
import { Icon, BtnDrop } from "@/components"
import { classNameString, randomId } from "@/utils"

const ArrList = [
    {
        sort: "priorityDownSort", 
        sortTitle: "Приоритету"
    }, {
        sort: "priorityUpSort", 
        sortTitle: "Приоритету"
    }, {
        sort: "alpabetDownSort", 
        sortTitle: "Алфавиту"
    }, {
        sort: "alpabetUpSort", 
        sortTitle: "Алфавиту"
    }, {
        sort: "dateCreateDownSort", 
        sortTitle: "Дате создания"
    }, {
        sort: "dateCreateUpSort", 
        sortTitle: "Дате создания"
    }, {
        sort: "updateDownSort", 
        sortTitle: "Дате обновления"
    }, {
        sort: "updateUpSort", 
        sortTitle: "Дате обновления"
    }
];

export default function Dropdown() {
    const [click, setClick] = useState(0);
    useEffect(() => {
        console.log(click);
        
    }, [click])
    return (
        <div onClick={() => setClick(prev => prev + 1)} className={style.mainWrapper}>
            <BtnDrop
                iconName={"priorityDownSort"}
                text={'Приоритету'}
            />
            <div className={style.wrapperList}>
                <div className={style.wrapperTitle}>
                    <Icon name="sortDrop" />
                    <p className={classNameString("body-md-bold")}>Сортировка по:</p>
                </div>
                <ul className={style.list}>
                    {ArrList.map(elem => 
                        <li key={elem.sort + randomId()} className={style.listElem}>
                            <Icon name={elem.sort} />
                            <p className={classNameString("body-md-regular")}>{elem.sortTitle}</p>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}