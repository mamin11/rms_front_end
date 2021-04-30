import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: []
  },

  mutations: {
    SET_STUDENTS (state, students) {
      state.students = students
    },
    ADD_STUDENT (state, student) {
      state.students.push(student)
    },
    DELETE_STUDENT(state, student) {
      let index = state.students.indexOf(student);
      state.students.splice(index, 1);
    }
  },

  actions: {
    getStudents ({ commit }) {
      axios.get('http://localhost:8081/api/v1/student')
      .then(response => {
        commit('SET_STUDENTS', response.data)
      })
    },

    addStudent ({ commit}, data) {
      console.log(data)
      axios.post('http://localhost:8081/api/v1/student', {
        name: data.name,
        email: data.email,
        dob: data.dob
      })
      .catch((error) => {
        // error.response.status Check status code
        console.log(error.response.status)
      })
      .then(response => {
        console.log(response)
        commit('ADD_STUDENT', data)
      })
    },

    deleteStudent({commit}, student) {
      axios.delete('http://localhost:8081/api/v1/student/' + student.id)
      .then(response => {
        console.log(response)
        // this.result.splice(id, 1)
        commit('DELETE_STUDENT', student)
      });
    },

  },

  modules: {},
});
