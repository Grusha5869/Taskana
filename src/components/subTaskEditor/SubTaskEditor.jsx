import style from "./subTaskEditor.module.css";
import { useContext, useEffect, useRef, useState } from "react"
import { classNameString, randomId } from '@/utils'
import { AppContext } from "@/context"
import { PriorityButton, BtnCreateTask, BtnCancelTask, Icon } from "@/components"

const IconName = ['ordinaryP', 'elevatedP', 'maximumP'];
const iconNameLength = IconName.length;

export default function SubTaskEditor() {
    const { setActiveTaskEditor, setTaskArr, activeEditWrapper, setActiveEditWrapper, taskSelect } = useContext(AppContext);
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [priority, setPriority] = useState(taskSelect.priority);
    const [classActive, setClassActive] = useState('');
    const [visibleEdit, setVisibleEdit] = useState(false);

    useEffect(() => {

        if (!priority) return
        switch (priority) {
            case 1:
                setClassActive(style.active0)
                break
            case 2:
                setClassActive(style.active1)
                break
            case 3:
                setClassActive(style.active2)
                break
        }
        
        
    }, [priority])

    useEffect(() => {
        if (taskSelect) {
            inputRef.current.value = taskSelect.title;
            setInputValue(taskSelect.title)
        }
    }, [taskSelect])

    function handleClickBtnCancel() {
        setVisibleEdit(false)

        setTimeout(() => {
            setActiveTaskEditor(false)
            setActiveEditWrapper(false)
        }, 400);
    }   

    function editTask() {
        setTaskArr(prev => prev.map(elem => {
            if (elem.id === taskSelect.id) {
                elem.title = inputValue
                elem.priority = priority
                elem.updatedAt = new Date().toISOString()
                
            }
            return elem
            
        }))
        setVisibleEdit(false)
        setTimeout(() => {
            setActiveTaskEditor(false)
            setActiveEditWrapper(false)
        }, 400);
    }

    function priorityHandle(elemName) {
        for (let i = 0; i < iconNameLength; i++) {
            if (IconName[i] === elemName) {
                setPriority(i + 1);
            }
        }
    }

    function handleKeyDownEnter(event) {
        if (event.key === "Enter") {
            if (inputValue.trim() === "") return
            editTask()
        }
    }

    function handleClick() {
        inputRef.current.value = "";
        setInputValue("");
    }

    useEffect(() => {
        if (activeEditWrapper) {
            setVisibleEdit(true)
        }

    }, [activeEditWrapper])

    return (
        <div className={classNameString(style.wrapper, visibleEdit && style.active)}>
            <div className={style.wrapperWrapper}>
                <div className={style.topPanel}>
                <div className={style.wrapperSticky}>
                    <h2 className={classNameString("heading-h1", style.title)}>Редактирование</h2>
                    <div className={style.wrapperInput}>
                        <p 
                            className={classNameString('body-lg-bold', style.textWrapperInput)}
                        >Название <span className={style.simbol}>*</span>
                        </p>
                        <div className={style.inputContainer}>
                            <input 
                                ref={inputRef}
                                className={classNameString('body-lg-regular', style.input)} 
                                placeholder="Название задачи" 
                                onChange={elem => setInputValue(elem.target.value)}
                                onKeyDown={event => handleKeyDownEnter(event)}
                                type="text"
                            />
                            {inputValue.length > 0 && (
                                <button onClick={handleClick} className={style.inputBtn}>
                                    <Icon name={'cross'} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className={style.priorityWrapper}>
                    <p className={classNameString('body-lg-bold', style.textPriorityWrapper)}>Приоритет</p>
                    <div className={style.btnWrapper}>
                        {IconName.map(elemName => (
                            <PriorityButton 
                                key={elemName + randomId(4)}
                                onClick={() => priorityHandle(elemName)}
                                classList={classActive}
                            >
                                <Icon name={elemName} />
                            </PriorityButton>
                        ))}
                    </div>
                </div>
            </div>
            <div className={style.footer}>
                <BtnCreateTask 
                    disabled={inputValue.trim() === '' ? true : false} 
                    classList={classNameString(style.btnCreateTask, inputValue.trim() === '' && style.opacity05)}
                    onClick={editTask}
                    text={'Сохранить'}
                />
                <BtnCancelTask
                    classList={style.btnCancelTask}
                    onClick={handleClickBtnCancel}
                    text={'Отмена'}
                />
            </div>
            </div>
        </div>
    )
}