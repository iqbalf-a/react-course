import React from "react";

import {StyledListGroup} from "./styles";
import {connect, useDispatch} from "react-redux";
import CourseItem from "./components/CourseItem";

import withPaginationList from "../../hoc/withPaginationList";
import constants from "../../constants";
import {deleteCourse} from "../../store/actions/courseAction";
import {useNavigate} from "react-router-dom";

const List = ({data, onNavigate}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onNavigateToEdit = (id) => () => {
        // onNavigate(constants.ROUTES.EDIT_COURSE, {id});
        navigate(`${constants.ROUTES.EDIT_COURSE}/?courseId=${id}`);
    };

    const onDelete = (id) => () => {
        const isOk = window.confirm("Apakah anda yakin mengapus couseia adjkgfsdgf");
        if (isOk) {
            dispatch(deleteCourse(id));
        }
    };

    return (
        <>
            <StyledListGroup>
                {data?.map((item) => (
                    <CourseItem data={item} key={item?.courseId} onNavigateToEdit={onNavigateToEdit(item.courseId)}
                                onDelete={onDelete(item.courseId)}/>
                ))}
            </StyledListGroup>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        listData: state.course.courseList,
    };
};

export default connect(mapStateToProps)(
    withPaginationList(List, {
        label: "Add Course",
        navAdd: constants.ROUTES.ADD_COURSE,
    })
);
