export const SET_STUDENTS = (state, students) => {
    state.students = students
}

export const ADD_STUDENT = (state, student) => {
    state.students.push(student)
}

export const DELETE_STUDENT = (state, student) => {
    let index = state.students.indexOf(student);
    state.students.splice(index, 1);
}