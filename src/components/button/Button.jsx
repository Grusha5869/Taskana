import style from './button.module.css';
import { classNameString } from "../../utils/helpers";
import { useContext, useEffect, useRef, useState } from 'react';
import Icon from '../icon/Icon';
import { AppContext } from '../../context/appContext/AppContext';

export const Button = ({ text, tabIndex }) => {
    const { activeTaskEditor, setActiveTaskEditor } = useContext(AppContext)
    const BtnRef = useRef(null);
    const [mouseEnter, setMouseEnter] = useState(null);
    const [clickCheck, setClickCheck] = useState(false);
    const [clickLoad, setClickLoad] = useState(false);
    const [btnFinish, setBtnFinish] = useState(false);


    function clickFinish(callback) {
        callback()
    }

    useEffect(() => {
        if (!activeTaskEditor) {
            BtnRef.current.style.opacity = '1';
            setMouseEnter(false)
        }
        if (!clickLoad && btnFinish && activeTaskEditor) {
            BtnRef.current.style.opacity = '0.5';
            BtnRef.current.style.disabled = true
            clickFinish(() => {
                setClickCheck(false)
            })
        }
    }, [clickLoad, btnFinish])

    useEffect(() => {
        if (activeTaskEditor) {
            setClickLoad(false)
            setBtnFinish(true)
        } else {
            setClickLoad(false)
            setBtnFinish(false)
        }
    }, [activeTaskEditor])

    function mouseEnterBtn() {
        if (btnFinish) return
        setMouseEnter(true)
    }

    function mouseLeaveBtn() {
        if (btnFinish) return
        setMouseEnter(false)
    }

    function handleClick() {
        if (btnFinish) return
        setClickCheck(true)
        setClickLoad(true)

        setTimeout(() => {
            setActiveTaskEditor(true)
        }, 100)
    }

    return (
        <button 
            ref={BtnRef}
            onClick={handleClick}
            onMouseEnter={mouseEnterBtn}
            onMouseLeave={mouseLeaveBtn}
            onFocus={mouseEnterBtn} 
            onBlur={mouseLeaveBtn}
            type='button' 
            className={classNameString('body-md-semibold', style.button, mouseEnter && style.buttonHover,  clickCheck && style.clickBtn)}
            tabIndex={tabIndex}
        >
            
            {clickLoad ? <Icon name='load' /> : (
                <>
                    <Icon name='plus' />
                    <p className={classNameString('body-md-semibold', style.text)}>{text}</p>
                </>
            )}
        </button>
    )
}

export const NavButton = ({ children, tabIndex }) => {
    return (
        <button 
            tabIndex={tabIndex}
            className={style.navBtn}
            type='button'
        >
            {children}
        </button>
    )
};

export const PriorityButton = ({ children, classList, onClick }) => {
    return (
        <button onClick={onClick} className={classNameString(style.priorityBtn, classList)}>{children}</button>
    )
}

export const BtnCreateTask = ({ classList, disabled, onClick, text }) => {
    return (
        <button 
            disabled={disabled} 
            className={classNameString("body-lg-semibold", classList)}
            onClick={onClick}
        >{text}</button>
    )
}

export const BtnCancelTask = ({ classList, onClick, text }) => {
    return (
        <button 
            className={classNameString("body-lg-semibold", classList)}
            onClick={onClick}
        >{text}</button>
    )
}