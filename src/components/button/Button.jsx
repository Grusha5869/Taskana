import style from './button.module.css';
import { classNameString } from "../../utils/helpers";
import { useContext, useEffect, useRef, useState } from 'react';
import Icon from '../icon/Icon';
import { ThemeContext } from '@/context';

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
        setMouseEnter(true)
    }

    function mouseLeaveBtn() {
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
            disabled={clickLoad}
        >
            
            {clickLoad ? <Icon name='load' fill='var(--base-white)' /> : (
                <>
                    <Icon name='plus' fill='var(--base-white)' />
                    <p className={classNameString('body-md-semibold', style.text)}>{text}</p>
                </>
            )}
        </button>
    )
}

export const NavButton = ({ children, tabIndex }) => {
    const {theme} = useContext(ThemeContext)
    return (
        <button 
            tabIndex={tabIndex}
            className={classNameString(style.navBtn, theme === 'light' ? style.navBtnLight : style.navBtnDark)}
            type='button'
        >
            {children}
        </button>
    )
};