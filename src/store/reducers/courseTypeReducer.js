import constants from "../../constants";
import courseTypeList from "../../fixtures/courseType.json";

const {count, totalPage, page, size} = courseTypeList;
const inititialState = {
    courseTypeList: [...courseTypeList.data],
    pagination: {
        count,
        totalPage,
        page,
        size,
    },
};

const courseTypeReducer = (state = inititialState, action) => {
    switch (action.type) {
        case constants.ACTION.ADD_COURSE_TYPE:
            return {
                ...state,
                courseTypeList: [...state.courseTypeList, action.payload],
            };
        case constants.ACTION.EDIT_COURSE_TYPE:
            const newCourseTypeList = state?.courseTypeList?.map((courseType) => {
                if (courseType.courseTypeId === action?.payload?.courseTypeId) {
                    return {
                        ...courseType,
                        ...action?.payload,
                    };
                }
                return courseType;
            });
            return {
                ...state,
                courseTypeList: newCourseTypeList,
            };
        case constants.ACTION.DELETE_COURSE_TYPE:
            const courseTypeListCopy = [...state?.courseTypeList];
            const courseTypeWithIndex = courseTypeListCopy?.findIndex((courseType) => {
                return courseType.courseTypeId === action.payload;
            });
            courseTypeListCopy.splice(courseTypeWithIndex, 1);
            return {
                ...state,
                courseTypeList: courseTypeListCopy,
            };
        default:
            return state;
    }
};

export default courseTypeReducer;
