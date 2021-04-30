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
      axios.post('http://localhost:8081/api/v1/student', {
        firstname: data.firstname,
        lastname: data.lastname,
        middlename: data.middlename,
        email: data.email,
        telephone: data.telephone,
        courses: data.courses,
        dob: data.dob
      })
      .catch((error) => {
        // error.response.status Check status code
        console.log(error.response.status)
      })
      .then(response => {
        console.log(response.status)

        commit('ADD_STUDENT', data)

        //update the state after adding new student
          axios.get('http://localhost:8081/api/v1/student')
          .then(response => {
            commit('SET_STUDENTS', response.data)
          })
      })
    },

    updateStudent({ commit }, student) {
      //put request
      axios.put('http://localhost:8081/api/v1/student/'+ student.id
      +'?firstname='+student.firstname
      +'&lastname='+student.lastname
      +'&middlename='+student.middlename
      +'&email='+student.email
      +'&telephone='+student.telephone
      +'&courses='+student.courses
      +'&dob='+student.dob)
      .catch((error) => {
        console.log(error.response.status)
      })
      .then(response => {
        console.log(response.status)
        
        axios.get('http://localhost:8081/api/v1/student')
        .then(response => {
          commit('SET_STUDENTS', response.data)
        })

      })
      //get fresh data and commit SET_STUDENTS
    },

    deleteStudent({commit}, student) {
      axios.delete('http://localhost:8081/api/v1/student/' + student.id)
      .then(response => {
        console.log(response.status)
        commit('DELETE_STUDENT', student)

        //update the state after deleting student
        axios.get('http://localhost:8081/api/v1/student')
        .then(response => {
          commit('SET_STUDENTS', response.data)
        })
      });
    },

  },

  modules: {},
});
