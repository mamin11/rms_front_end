export const SET_STUDENTS = (state, students) => {
    state.students = students
}

export const SET_COURSES = (state, courses) => {
    state.courses = courses
}

export const SET_MODULES = (state, modules) => {
    state.modules = modules
}

export const SET_MODULES_BY_TITLE = (state, modules) => {
    state.modulesByTitle = modules
}

export const SET_MODULES_BY_COURSE = (state, modules) => {
    state.modulesByCourse = modules
}

export const ADD_STUDENT = (state, student) => {
    state.students.push(student)
}

export const ADD_COURSE = (state, course) => {
    state.courses.push(course)
}

export const ADD_MODULE = (state, module) => {
    state.modules.push(module)
}

export const DELETE_STUDENT = (state, student) => {
    let index = state.students.indexOf(student)
    state.students.splice(index, 1)
}

export const DELETE_COURSE = (state, course) => {
    let index = state.courses.indexOf(course)
    state.courses.splice(index, 1)
}

export const DELETE_MODULE = (state, module) => {
    let index = state.modules.indexOf(module)
    state.modules.splice(index, 1)
}