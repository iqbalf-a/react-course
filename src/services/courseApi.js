import store from "../store/store";

export const getCourseById = (id) => {
    const courseList = store.getState().course?.courseList;

    return courseList.filter((course) => {
        return course.courseId === id;
    })?.[0];
};

export const getCourseTypeById = (id) => {
    const courseTypeList = store.getState().courseType?.courseTypeList;

    return courseTypeList.filter((courseType) => {
        return courseType.courseTypeId === id;
    })?.[0];
};


