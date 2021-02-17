const Element = (props)=>{
  const newElement = document.createElement(props?.elementType);

  props?.classList && newElement.classList.add(...props.classList);
  props?.children && newElement.append(...props.children);
  props?.src && (newElement.src = props.src);
  props?.text && (newElement.textContent = props.text);

  return newElement;
}

module.exports = Element;