export const SET_STUDENTS = (state, students) => {
    state.students = students
}

export const SET_COURSES = (state, courses) => {
    state.courses = courses
}

export const ADD_STUDENT = (state, student) => {
    state.students.push(student)
}

export const ADD_COURSE = (state, course) => {
    state.courses.push(course)
}

export const DELETE_STUDENT = (state, student) => {
    let index = state.students.indexOf(student)
    state.students.splice(index, 1)
}

export const DELETE_COURSE = (state, course) => {
    let index = state.courses.indexOf(course)
    state.courses.splice(index, 1)
}