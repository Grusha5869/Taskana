export function editPadding(elem, side, value) {
    if (!elem) return
    
    if (side === 'left') {
        elem.style.paddingLeft = value + 'px';
    } else if (side === 'right') {
        elem.style.paddingRight = value + 'px';
    }

}

export function classNameString(...elemArr) {
    return elemArr.join(" ");
} 