import { useEffect, useRef, useState, useContext } from "react"
import style from "./dropdown.module.css"
import { Icon, BtnDrop } from "@/components"
import { AppContext } from '@/context'
import { classNameString, randomId, ArrListDrop, sortingPriority, sortingDateCreate, sortingDateUpdate, sortingAlpabet } from "@/utils"

export default function Dropdown() {
    const [listClose, setListClose] = useState(true);
    const [storeSorting, setStoreSorting] = useState(ArrListDrop[4]);
    const [activeElemId, setActiveElemId] = useState(ArrListDrop[4].sort);
    const wrapperRef = useRef(null);
    const { setTaskArr, updateTaskSort } = useContext(AppContext);

    useEffect(() => {
        if (!storeSorting.sort) return

        if (storeSorting.sort === "priorityDownSort") {
            setTaskArr(prev => sortingPriority(prev))
        } else if (storeSorting.sort === "priorityUpSort") {
            setTaskArr(prev => sortingPriority(prev, true))
        } else if (storeSorting.sort === "alpabetDownSort") {
            setTaskArr(prev => sortingAlpabet(prev))
        } else if (storeSorting.sort === "alpabetUpSort") {
            setTaskArr(prev => sortingAlpabet(prev, true))
        } else if (storeSorting.sort === "dateCreateDownSort") {
            setTaskArr(prev => sortingDateCreate(prev))
        } else if (storeSorting.sort === "dateCreateUpSort") {
            setTaskArr(prev => sortingDateCreate(prev, true))
        } else if (storeSorting.sort === "updateDownSort") {
            setTaskArr(prev => sortingDateUpdate(prev))
        } else if (storeSorting.sort === "updateUpSort") {
            setTaskArr(prev => sortingDateUpdate(prev, true))
        }
    }, [storeSorting, updateTaskSort])

    function handleClickList(elem) {
        setStoreSorting(elem)
        setListClose(true)
        setActiveElemId(elem.sort)
    }

    useEffect(() => {
        const handleListClose = (event) => {
            if (wrapperRef.current && wrapperRef.current.contains(event.target)) {
                return
            }

            setListClose(true)
        }

        if (!listClose) {
            setTimeout(() => {
                return window.addEventListener('click', handleListClose)
            }, 0)
        }

        return () => window.removeEventListener('click', handleListClose)
    }, [listClose])

    return (
        <div className={style.mainWrapper} ref={wrapperRef}>
            <BtnDrop
                content={storeSorting}
                onClick={() => setListClose(prev => prev ? false : true)}
            />
            <div className={classNameString(style.wrapperList, listClose && style.hiddenList)}>
                <div className={style.wrapperTitle}>
                    <Icon name="sortDrop" />
                    <p className={classNameString("body-md-bold", style.text)}>Сортировка по:</p>
                </div>
                <ul className={style.list}>
                    {ArrListDrop.map(elem => 
                        <li 
                            tabIndex={0} 
                            key={elem.sort + randomId()}    className={style.listElem}
                            onClick={() => handleClickList(elem)}
                        >
                            <Icon name={elem.sort} />
                            <p className={classNameString("body-md-regular", style.text)}>{elem.sortTitle}</p>

                            {elem.sort === activeElemId && (
                                <Icon className={style.jackdawSort} name="jackdawSort" />
                            )}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}