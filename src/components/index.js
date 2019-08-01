//details
import Loupe from "./toyo-details/Loupe.vue";
import Review from "./toyo-details/Review.vue";
import Spcs from "./toyo-details/Spcs.vue";
//float
import Float from "./toyo-float/Float.vue";
//footer
import Footer from "./toyo-footer/Footer.vue";
//header
import Header from "./toyo-header/Header.vue";
//home
import Banner from "./toyo-home/Banner.vue";
import Dzzt from "./toyo-home/Dzzt.vue";
import News from "./toyo-home/News.vue";
import Rxtj from "./toyo-home/Rxtj.vue";
import Screen from "./toyo-home/Screen.vue";
import Xlcp from "./toyo-home/Xlcp.vue";
import Zszs from "./toyo-home/Zszs.vue";
//login

//logo
import Logo from "./toyo-logo/Logo.vue";
//nav
import Nav from "./toyo-nav/Nav.vue";
// reg

//shopping

const toyo = {
    install(Vue) {
        Vue.component('toyo-Loupe', Loupe);
        Vue.component('toyo-Review', Review);
        Vue.component('toyo-Spcs', Spcs);
        Vue.component('toyo-Float', Float);
        Vue.component('toyo-Footer', Footer);
        Vue.component('toyo-Header', Header);
        Vue.component('toyo-Banner', Banner);
        Vue.component('toyo-Dzzt', Dzzt);
        Vue.component('toyo-News', News);
        Vue.component('toyo-Rxtj', Rxtj);
        Vue.component('toyo-Screen', Screen);
        Vue.component('toyo-Xlcp', Xlcp);
        Vue.component('toyo-Zszs', Zszs);
        Vue.component('toyo-Logo', Logo);
        Vue.component('toyo-Nav', Nav);
    }
}

export default toyo;
