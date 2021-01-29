const Element = (props)=>{
  const newElement = document.createElement(props?.elementType);

  props?.classList && newElement.classList.add(...props.classList);
  props?.children && newElement.append(...props.children);

  return newElement;
}

module.exports = Element;