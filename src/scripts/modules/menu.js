const api = require('./api');

const menu = {
    init: ({tree, mainClass})=>{
     const config ={
        method: 'GET',
            url: `/api/catalog_system/pub/category/tree/${tree}`
        }
        const callbackMenu = data =>{
            menu.render({data, main: mainClass});
        }

        api(config, callbackMenu);
    },

    render: ({data, main}) =>{
        const $mainClass = typeof main == 'string' ? document.querySelector(main): main;
        const mainClassWithoutPoint = typeof main == 'string' ? main.replace('.', ''): main.classList[0].replace('.', '');

        data.forEach(category => {
            const {name, url, hasChildren, children} = category; 

            const newCategory = document.createElement('div');
            newCategory.classList.add(`${mainClassWithoutPoint}-item`);

            const newCategoryLink = document.createElement('a');
            newCategoryLink.href = url;
            newCategoryLink.textContent = name;

            const newCategoryItem = document.createElement('div');
            newCategoryItem.classList.add(`${mainClassWithoutPoint}-box-category`);

            newCategory.appendChild(newCategoryLink);
            newCategory.appendChild(newCategoryItem);
            $mainClass.appendChild(newCategory);

            if(hasChildren){
                menu.render({data: children, main: newCategoryItem});
            }
        })
    }
}

module.exports = menu;