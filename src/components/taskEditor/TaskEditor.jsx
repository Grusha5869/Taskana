/* eslint-disable react-hooks/exhaustive-deps */
import style from "./taskEditor.module.css"
import { useContext, useEffect, useRef, useState } from "react"
import { classNameString, randomId } from '@/utils'
import { AppContext } from "@/context"
import { PriorityButton, BtnCreateTask, BtnCancelTask, Icon } from "@/components"

const IconName = ['ordinaryP', 'elevatedP', 'maximumP'];
const iconNameLength = IconName.length;

export default function TaskEditor() {
    const { activeTaskEditor, setActiveTaskEditor, taskArr, setTaskArr } = useContext(AppContext);
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [priority, setPriority] = useState(1);
    const [classActive, setClassActive] = useState('');

    useEffect(() => {
        if (activeTaskEditor) {
            setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            }, 100); 
        } else {
            inputRef.current.value = '';
            setInputValue('')
            setPriority(1)
        }
    }, [activeTaskEditor])

    useEffect(() => {
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
        if (taskArr.length > 0) {
            setPriority(1)
        }
    }, [taskArr])

    function createTask() {
        if (inputValue.trim() === '') return
        setTaskArr(prevElem => [...prevElem, 
            {
                id: randomId(), 
                title: inputValue, 
                priority: priority, 
                createdAt: new Date().toISOString(), 
                updatedAt: new Date().toISOString(),
            }
        ])
        setActiveTaskEditor(false);
        
    }

    function handleClick() {
        inputRef.current.value = "";
        setInputValue("");
    }

    function priorityHandle(elemName) {
        for (let i = 0; i < iconNameLength; i++) {
            if (IconName[i] === elemName) {
                setPriority(i + 1);
            }
        }
    }

    return (
        <div className={classNameString(style.wrapper, activeTaskEditor && style.active)}>
            <div className={style.wrapperWrapper}>
                <div className={style.topPanel}>
                <div className={style.wrapperSticky}>
                    <h2 className={classNameString("heading-h1", style.title)}>Создание задачи</h2>
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
                    onClick={createTask}
                    text={'Создать'}
                />
                <BtnCancelTask
                    classList={style.btnCancelTask}
                    onClick={() => setActiveTaskEditor(false)}
                    text={'Отмена'}
                />
            </div>
            </div>
        </div>
    )
}