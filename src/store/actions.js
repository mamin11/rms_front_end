import axios from 'axios'

export const getStudents = ({ commit }) => {
    axios.get('http://localhost:8081/api/v1/student')
    .then(response => {
        commit('SET_STUDENTS', response.data)
    })
}

export const uploadFile = ({ commit}, {data, id}) => {
    console.log(data)
    axios.post('http://localhost:8081/api/v1/module/'+id+'/content/upload', data)
    .catch((error) => {
      // error.response.status Check status code
        console.log(error.response)
    })
    .then(response => {
        console.log(response.status)

      //update the state after adding new module
        axios.get('http://localhost:8081/api/v1/module')
        .then(response => {
            commit('SET_MODULES', response.data)
        })

    })
}

export const getVideoLink = ({commit}, id) => {
    axios.get('http://localhost:8081/api/v1/module/'+id+'/content/download')
    .catch((error) => {
        console.log(error)
    })
    .then(response => {
        // console.log('video link found************')
        // console.log(response.data.httpRequest.uri)
        commit('SET_MODULE_VIDEO', response.data.httpRequest.uri)
    })
}

export const resetVideoLink = ({commit}) => {
    commit('RESET_MODULE_VIDEO')
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
        console.log(error.response)
    })
    .then(response => {
        console.log(response.status)

        commit('', data)

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
        console.log(error.response)
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

//COURSES
export const getCourses = ({ commit }) => {
    axios.get('http://localhost:8081/api/v1/course')
    .then(response => {
        commit('SET_COURSES', response.data)
    })
}

export const addCourse = ({commit}, data) => {
    axios.post('http://localhost:8081/api/v1/course', {
        title: data.title,
        duration: data.duration
    })
    .catch((error) => {
        console.log(error.response)
    })
    .then(response => {
        console.log(response.status)

        commit('ADD_COURSE', data)

      //update the state after adding new student
        axios.get('http://localhost:8081/api/v1/course')
        .then(response => {
            commit('SET_COURSES', response.data)
        })
    })
}

export const updateCourse = ({ commit }, course) => {
    //put request
    axios.put('http://localhost:8081/api/v1/course/'+ course.id
    +'?title='+course.title
    +'&duration='+course.duration)
    .catch((error) => {
        console.log(error.response)
    })
    .then(response => {
        console.log(response.status)
        
        //get fresh data and commit SET_COURSES
        axios.get('http://localhost:8081/api/v1/course')
        .then(response => {
            commit('SET_COURSES', response.data)
    })

    })
}

export const deleteCourse = ({commit}, course) => {
    axios.delete('http://localhost:8081/api/v1/course/' + course.id)
    .then(response => {
        console.log(response.status)
        commit('DELETE_COURSE', course)

      //update the state after deleting course
        axios.get('http://localhost:8081/api/v1/course')
        .then(response => {
            commit('SET_COURSES', response.data)
        })
    });
}

//MODULES
export const getModules = ({ commit }) => {
    axios.get('http://localhost:8081/api/v1/module')
    .then(response => {
        commit('SET_MODULES', response.data)
    })
}

//get modules by course
export const getModuleByCourse = ({ commit }, course) => {
    axios.get('http://localhost:8081/api/v1/module/course/'+course)
    .then(response => {
        commit('SET_MODULES_BY_COURSE', response.data)
    })
}

//get module by title  http://localhost:8081/api/v1/module/title/csy3040
export const getModuleByTitle = async ({ commit }, title) => {
    await axios.get('http://localhost:8081/api/v1/module/title/'+title)
    .then(response => {
        commit('SET_MODULES_BY_TITLE', response.data)
    })
}

export const addModule = async ({ commit}, data) => {
    await axios.post('http://localhost:8081/api/v1/module', {
        title: data.title,
        course: data.course,
        moduleContentLink: data.moduleContentLink,
        startDate: data.startDate,
    })
    .catch((error) => {
      // error.response.status Check status code
        console.log(error.response)
    })
    .then(response => {
        console.log(response.status)

        commit('ADD_MODULE', data)

      //update the state after adding new module
        axios.get('http://localhost:8081/api/v1/module')
        .then(response => {
            commit('SET_MODULES', response.data)
        })
    })
}

export const updateModule = ({ commit }, module) => {
    //put request
    axios.put('http://localhost:8081/api/v1/module/'+ module.id
    +'?title='+module.title
    +'&course='+module.course
    +'&moduleContentLink='+module.moduleContentLink
    +'&startDate='+module.startDate)
    .catch((error) => {
        console.log(error.response)
    })
    .then(response => {
        console.log(response.status)
        
        //get fresh data 
        axios.get('http://localhost:8081/api/v1/module')
        .then(response => {
            commit('SET_MODULES', response.data)
    })

    })
}

export const deleteModule = ({commit}, module) => {
    axios.delete('http://localhost:8081/api/v1/module/' + module.id)
    .then(response => {
        console.log(response.status)
        commit('DELETE_MODULE', module)

      //update the state 
        axios.get('http://localhost:8081/api/v1/module')
        .then(response => {
            commit('SET_MODULES', response.data)
        })
    });
}