import { AppContext } from "./AppContext";
import { useEffect, useState, useMemo } from "react";

export const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [activeTaskEditor, setActiveTaskEditor] = useState(false);
    const [taskArr, setTaskArr] = useState([]);
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, [theme])

    const taskArrReverse = useMemo(() => {
        return taskArr.length > 0 ? taskArr.slice().reverse() : [];
    }, [taskArr]);

    return (
        <AppContext.Provider value={
            { theme, toggleTheme, activeTaskEditor, setActiveTaskEditor, taskArr, setTaskArr, taskArrReverse }
        }>
            {children}
        </AppContext.Provider>
    );
}
