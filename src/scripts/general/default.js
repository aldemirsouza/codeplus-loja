const menu = require('../modules/menu');

const Default = {
    init: function () {
       Default.menuInit();
    },

    menuInit: () => {
        const menuConfig = {
            tree: 3,
            mainClass: '.main_header_departments'
        }
        menu.init(menuConfig);
    }
}

module.exports = Default