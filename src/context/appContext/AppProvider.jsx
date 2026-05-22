import { AppContext } from "./AppContext";
import { useEffect, useState, useMemo } from "react";

export const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [activeTaskEditor, setActiveTaskEditor] = useState(false);
    const [taskArr, setTaskArr] = useState(JSON.parse(localStorage.getItem('taskList')) || []);
    const [updateTaskSort, setUpdateTaskSort] = useState(0);
    const [activeEditWrapper, setActiveEditWrapper] = useState(false);
    const [taskSelect, setTaskSelect] = useState(null);
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskArr))
    }, [taskArr])

    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, [theme])

    const taskArrReverse = useMemo(() => {
        if (!Array.isArray(taskArr)) return
        return taskArr.length > 0 ? taskArr.slice().reverse() : [];
    }, [taskArr]);

    return (
        <AppContext.Provider value={
            { theme, toggleTheme, activeTaskEditor, setActiveTaskEditor, taskArr, setTaskArr, taskArrReverse, updateTaskSort, setUpdateTaskSort, activeEditWrapper, setActiveEditWrapper, taskSelect, setTaskSelect }
        }>
            {children}
        </AppContext.Provider>
    );
}
