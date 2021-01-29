const Element = require("./element");

const Minicart = {
   init: ({minicartClass, containerClass}) =>{
     const $minicart = document.querySelector(minicartClass);

     $minicart.addEventListener('click', ()=>{
       Minicart.create({containerClass});
     });
   },

   create: ({containerClass})=>{
    const parentClass = containerClass ? containerClass: 'body';
    const $container = document.querySelector(parentClass);

    const mincartMiddle = Element({
      elementType: 'ul',
      classList: ['minicart__middle']
    });

    const minicartTop = Element({
      elementType: 'div',
      classList: ['minicart__top']
    });

    const container = Element({
      elementType: 'div',
      classList: ['minicart'],
      children:[minicartTop, mincartMiddle]
    });

    console.log(container);
   }
}

module.exports = Minicart;