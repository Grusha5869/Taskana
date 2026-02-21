import style from "./task.module.css"
import { classNameString } from '../../utils/helpers'

const styleDefCheckbox = style.checkbox;
const stylePriority0 = style.checkboxP0;
const stylePriority1 = style.checkboxP1;
const stylePriority2 = style.checkboxP2;
const text = style.text;

export default function Task({ elem }) {
    
    function checkStyleInput(value) {
        switch (value) {
            case 0:
                return stylePriority0
            case 1:
                return stylePriority1
            case 2:
                return stylePriority2
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