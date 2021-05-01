import axios from 'axios'

export const getStudents = ({ commit }) => {
    axios.get('http://localhost:8081/api/v1/student')
    .then(response => {
        commit('SET_STUDENTS', response.data)
    })
}

export const addStudent = ({ commit}, data) => {
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
}

export const updateStudent = ({ commit }, student) => {
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
        
        //get fresh data and commit SET_STUDENTS
        axios.get('http://localhost:8081/api/v1/student')
        .then(response => {
            commit('SET_STUDENTS', response.data)
    })

    })
}

export const deleteStudent = ({commit}, student) => {
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
}