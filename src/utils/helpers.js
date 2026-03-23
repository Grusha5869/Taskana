export function classNameString(...elemArr) {
    const filterArr = elemArr.filter(elem => {
        if (elem) return true
    })
    return filterArr.join(" ");
} 

export function randomId(length = 8) {
    const character = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsamnbvcxz";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += character[Math.floor(Math.random() * character.length)]
    }
    
    return result
}

export function sortingPriority(arr, rever = false) {
    if (!arr || arr.length <= 0) return arr;

    let res1Pri = [];
    let res2Pri = [];
    let res3Pri = [];

    arr.map(elem => {
        if (elem.priority === 1) {
            res1Pri = [...res1Pri, elem]
        } else if (elem.priority === 2) {
            res2Pri = [...res2Pri, elem]
        } else if (elem.priority === 3) {
            res3Pri = [...res3Pri, elem]
        }
    })

    const result = rever ? [...res3Pri, ...res2Pri, ...res1Pri] : [...res1Pri, ...res2Pri, ...res3Pri]
    console.log(result);
    

    return result
}

export function sortingDateCreate(arr, rever = false) {
    if (!arr || arr.length <= 0) return arr;
    
    const sortedArr = [...arr].sort((elem1, elem2) => {
        const date1 = new Date(elem1.createdAt).getTime();
        const date2 = new Date(elem2.createdAt).getTime();
        
        if (rever) {
            return date1 - date2;
        } else {
            return date2 - date1;
        }
    });
    
    return sortedArr;
}

export function sortingDateUpdate(arr, rever = false) {
    if (!arr || arr.length <= 0) return arr;
    
    const sortedArr = [...arr].sort((elem1, elem2) => {
        const date1 = new Date(elem1.updatedAt).getTime();
        const date2 = new Date(elem2.updatedAt).getTime();
        
        if (rever) {
            return date1 - date2;
        } else {
            return date2 - date1;
        }
    });
    
    return sortedArr;
}

export function sortingAlpabet(arr, rever = false) {
    if (!arr || arr.length <= 0) return arr

    const sort = [...arr].sort((elem1, elem2) => {
        let arrElem1 = elem1.title.toLowerCase()
        let arrElem2 = elem2.title.toLowerCase()

        if (rever) {
            return arrElem1 > arrElem2 ? -1 : 1
        } else {
            return arrElem1 > arrElem2 ? 1 : -1
        }
    })

    return sort
}