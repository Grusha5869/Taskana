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