import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './modules/authentication';
import posts from './modules/posts';
import shared from './modules/shared';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        authentication,
        posts,
        shared
    }
})
