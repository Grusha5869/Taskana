import { useContext, useEffect, useState } from "react"
import { AppContext } from "@/context"

export const handleTask = (elem) => {
    const { taskArrReverse } = useContext(AppContext);
    console.log(taskArrReverse);
    const [taskSort, setTaskSort] = useState(taskArrReverse)

    useEffect(() => {
        if (taskArrReverse.length <= 0) return
        setTaskSort(taskArrReverse)
        
    }, [taskArrReverse, taskSort])

    
    console.log('taskSort', taskSort);
    return { taskSort, setTaskSort }
}