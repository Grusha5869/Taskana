import { useState, useContext, useEffect } from "react";
import { Icon, BtnEdit } from "@/components";
import style from "./task.module.css";
import { classNameString } from '@/utils';
import { AppContext } from "@/context";

const styleDefCheckbox = style.checkbox;
const stylePriority1 = style.checkboxP0;
const stylePriority2 = style.checkboxP1;
const stylePriority3 = style.checkboxP2;
const text = style.text;

export default function Task({ elem }) {
    const [active, setActive] = useState(false)
    const { activeEditWrapper, setActiveEditWrapper, activeTaskEditor, setActiveTaskEditor, taskSelect, setTaskSelect } = useContext(AppContext);

    function handleClick() {
        setTaskSelect(elem)
        setActiveEditWrapper(true)
    }
    
    function checkStyleInput(value) {
        switch (value) {
            case 1:
                return stylePriority1
            case 2:
                return stylePriority2
            case 3:
                return stylePriority3
            default:
                break;
        }  
    }
    
    return (
        <li onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} tabIndex="0" className={style.listElem}>
            <div className={style.wrapper}>
                <input 
                    className={classNameString(styleDefCheckbox, checkStyleInput(elem.priority))}
                    type="checkbox" 
                    name="checkbox" 
                    id="checkbox" 
                />
                <p className={classNameString("body-lg-regular", text)}>{elem.title}</p>
            </div>

            <BtnEdit 
                onClick={handleClick}
                active={active}
                setActive={setActive}
                activeEditWrapper={activeEditWrapper}
                setActiveEditWrapper={setActiveEditWrapper}
                setActiveTaskEditor={setActiveTaskEditor}
            />
        </li>
    )
}