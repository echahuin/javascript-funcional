// {
//     tag: 'h1',
//     attr: {
//         class: 'title'
//     }
// }

const attrsoString = (obj = {}) =>{
    const keys = Object.keys(obj)
    const attrs = []


    for(let i = 0; i<keys.length ; i++){
        let attr = keys[i]
        attrs.push(`${attr}="${obj[attr]}"`)
    }
    const string = attrs.join('')

    return string;
}

const tagAtrrs = obj => (content = "") =>{
    return `<${obj.tag}${obj.attr? ' ' : ''}${attrsoString(obj.attr)}>${content}</${obj.tag}>`
}

const tag = t => {
    if(typeof t === 'string'){
        tagAtrrs({tag: t})
    }else{
        tagAtrrs(t)
    }
}

//log composite  function
console.log(tagAtrrs({
    tag: 'h1',
        attr: {
            class: 'title'
        }
})('Title'))