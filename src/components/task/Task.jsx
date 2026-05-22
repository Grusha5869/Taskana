import { useState, useContext } from "react";
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
    const { activeEditWrapper, setActiveEditWrapper, setActiveTaskEditor, setTaskSelect, setTaskArr } = useContext(AppContext);

    function handleClick() {
        setTaskSelect(elem)
        setActiveEditWrapper(true)
    }
    
    function checkStyleInput(value) {
        switch (value) {
            case 1: return stylePriority1;
            case 2: return stylePriority2;
            case 3: return stylePriority3;
            default: return styleDefCheckbox;
        }
    }

    function handleChange() {
        setTaskArr(prev =>
            prev.map(task => task.id === elem.id ? {...task, completed: !task.completed} : task)
        )
    }
    
    return (
        <li onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} tabIndex="0" className={style.listElem}>
            <div className={style.wrapper}>
                <input 
                    onChange={handleChange}
                    className={classNameString(styleDefCheckbox, checkStyleInput(elem.priority))}
                    type="checkbox" 
                    checked={elem.completed || false}
                    name="checkbox" 
                    id={`checkbox-${elem.id}`}
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