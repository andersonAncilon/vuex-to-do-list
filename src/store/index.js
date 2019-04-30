import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		toDo: []
	},
	getters: {
		toDo: (state) => state.toDo
	},
	mutations: {
		setTask: (state, payload) => state.toDo.push(payload),
		changeTaskStatus: (state, payload) => {
			let index = state.toDo.indexOf(payload);
			state.toDo[index].status = !payload.status;
		},
		deleteTask: (state, payload) => {
			let index = state.toDo.indexOf(payload);
			state.toDo.splice(index, 1);
		}
	}
});
