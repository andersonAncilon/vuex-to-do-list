import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		toDo: [{ id: 0, content: 'Learn VueX', status: false }]
	},
	getters: {
		toDo: (state) => state.toDo
	},
	mutations: {
		setTask: (state, payload) => state.toDo.push(payload)
	}
});
