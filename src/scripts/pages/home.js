const Home = {
    init: function () {
        Home.slickPrincipalBanner();
    },

    slickPrincipalBanner: ()=>{
        $('.principal-banner').slick({
            //dots: true,
        });
    }
}

module.exports = Home