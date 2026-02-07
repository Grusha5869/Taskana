import style from './button.module.css';
import { classNameString } from "../../utils/helpers";
import { useEffect, useRef, useState } from 'react';
import Icon from '../icon/Icon';

export const Button = ({ text, tabIndex }) => {
    const BtnRef = useRef(null);
    const [mouseEnter, setMouseEnter] = useState(null);
    const [clickCheck, setClickCheck] = useState(false);
    const [clickLoad, setClickLoad] = useState(false);
    const [btnFinish, setBtnFinish] = useState(false);

    function clickFinish(callback) {
        callback()
    }

    useEffect(() => {
        if (!clickLoad && btnFinish) {
            BtnRef.current.style.opacity = '0.5';
            BtnRef.current.style.disabled = true
            console.log(BtnRef.current.style.disabled);
            
            clickFinish(() => {
                setClickCheck(false)
            })
        }
    }, [clickLoad, btnFinish])

    function hardTask() {
        //симуляция задачи
        setClickLoad(true)
        setTimeout(() => {
            setClickLoad(false)
            setBtnFinish(true)
        }, 200)
    }

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
        hardTask()
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