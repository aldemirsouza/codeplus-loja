const api = require('./api');

const menu = {
    init: ({tree, mainClass})=>{
     const config ={
        method: 'GET',
            url: `/api/catalog_system/pub/category/tree/${tree}`
        }
        const callbackMenu = data =>{
            menu.render({data, mainClass});
        }

        api(config, callbackMenu);
    },

    render: ({data, mainClass}) =>{
        const $mainClass = document.querySelector(mainClass);
        data.forEach(category => {
            const {name, url} = category; 

            const newCategory = document.createElement('li');
            //newCategory.classList.add(`${mainClass}-item`);

            const newCategoryLink = document.createElement('a');
            newCategoryLink.href = url;
            newCategoryLink.textContent = name;

            newCategory.appendChild(newCategoryLink);
            $mainClass.appendChild(newCategory);
        })
    }
}

module.exports = menu;