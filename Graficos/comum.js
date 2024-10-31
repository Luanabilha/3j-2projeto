const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickfont = {
    color: getCSS('--cor-primaria'),
    size: 16,
    
}
export {
    getCSS
}