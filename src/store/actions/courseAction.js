import constants from "../../constants";

export const addCourse = (course) => ({
    type: constants.ACTION.ADD_COURSE,
    payload: {
        courseId: Math.random().toString(36).substring(2, 7),
        // title: course.title,
        // description: course.description,
        // file: course.courseFile,
        // duration: course.duration,
        // level: course.level,
        // courseTypeId: course.typeId
        title: course.title,
        description: course.description,
        link: course.file,
        courseInfo: {
            duration: course.duration,
            level: course.level
        },
        courseType: {
            courseTypeId: course.typeId,
            typeName: course.typeName,
        }
    }
})

export const editCourse = (course) => ({
    type: constants.ACTION.EDIT_COURSE,
    payload: course
})

export const deleteCourse = (id) => ({
    type: constants.ACTION.DELETE_COURSE,
    payload: id
})