const Element = require("./element");
const formatReal = require("./formatReal");

const Minicart = {
   init: ({minicartClass, containerClass, OutterBox}) =>{
     const $minicart = document.querySelector(minicartClass);

     $minicart.addEventListener('click', ()=>{
       Minicart.create({containerClass, OutterBox});
     });
   },

   create: ({containerClass, OutterBox})=>{
    const parentClass = containerClass ? containerClass: 'body';
    const $container = document.querySelector(parentClass);

    vtexjs.checkout.getOrderForm().done(function(orderForm){
      const itemList = orderForm.items
      
      const minicartBottom = Element({
        elementType: 'div',
        classList: ['minicart__bottom']
      });
  
      const minicartMiddle = Element({
        elementType: 'ul',
        classList: ['minicart__middle'],
        children: itemList.map(product=> Minicart.product({
          imageUrl: product.imageUrl,
          name: product.name,
          price: product.price
        }))
      });
  
      const minicartTop = Element({
        elementType: 'div',
        classList: ['minicart__top']
      });
  
      const container = Element({
        elementType: 'div',
        classList: ['minicart'],
        children:[minicartTop, minicartMiddle, minicartBottom]
      });
  
      const outterBoxMinicart = Element({
        elementType: 'div',
        classList: ['minicart__box'],
        children: [container]
      });

      outterBoxMinicart.addEventListener('click', outterBoxMinicart.remove);
  
      if(OutterBox) return $container.append(outterBoxMinicart)
      $container.append(container);
    });
   },
    
   product: ({imageUrl, name, price, listPrice})=>{
    const productPrice = Element({
      elementType: 'strong',
      classList: ['minicart__price'],
      text: formatReal(price)
    });

    const productName = Element({
      elementType: 'h4',
      classList: ['minicart__name'],
      text: name
    });
    
    const rightWrapper = Element({
      elementType: 'div',
      classList: ['minicart__right-wrapper'],
      children: [productName, productPrice]
    });
    
    const productImage = Element({
      elementType: 'img',
      classList: ['minicart__image'],
      src: imageUrl
    })

    const container = Element({
      elementType: 'li',
      classList: ['minicart__product'],
      children: [productImage, rightWrapper]
    });

    return container
   },
}

module.exports = Minicart;