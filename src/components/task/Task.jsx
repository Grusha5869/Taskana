import style from "./task.module.css"
import { classNameString } from '@/utils'

const styleDefCheckbox = style.checkbox;
const stylePriority1 = style.checkboxP0;
const stylePriority2 = style.checkboxP1;
const stylePriority3 = style.checkboxP2;
const text = style.text;

export default function Task({ elem }) {
    
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
        <li tabIndex="0" className={style.listElem}>
            <input 
                className={classNameString(styleDefCheckbox, checkStyleInput(elem.priority))}
                type="checkbox" 
                name="checkbox" 
                id="checkbox" 
            />
            <p className={classNameString("body-lg-regular", text)}>{elem.title}</p>
        </li>
    )
}