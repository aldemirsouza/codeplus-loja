const menu = require('../modules/menu');
const Minicart = require('../modules/minicart');

const Default = {
    init: function () {
       Default.menuInit();
       Minicart.init({minicartClass: '.header__carrinho'});
    },

    menuInit: () => {
        const menuConfig = {
            tree: 3,
            mainClass: '.header__categorias'
        }
        menu.init(menuConfig);
    }
}

module.exports = Default