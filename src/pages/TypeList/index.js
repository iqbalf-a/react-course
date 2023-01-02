import React from "react";

import withPaginationList from "../../hoc/withPaginationList";

import {StyledListGroup} from "./styles";
import TypeItem from "./components/TypeItem";
import {connect, useDispatch} from "react-redux";
import constants from "../../constants";
import {deleteCourseType} from "../../store/actions/courseTypeAction";
import {useNavigate} from "react-router-dom";

const List = ({data, onNavigate}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onNavigateToEdit = (id) => () => {
        // onNavigate(constants.ROUTES.EDIT_COURSE_TYPE, {id})
        navigate(`${constants.ROUTES.EDIT_COURSE_TYPE}/?courseTypeId=${id}`);
    }

    const onDelete = (id) => () => {
        const isOk = window.confirm("Apakah anda yakin menghapus course type slkdjkf?");
        if (isOk) {
            dispatch(deleteCourseType(id));
        }
    }

    return (
        <>
            <StyledListGroup>
                {data?.map((item) => (
                    <TypeItem data={item} key={item.courseTypeId}
                              onNavigateToEdit={onNavigateToEdit(item.courseTypeId)}
                    onDelete={onDelete(item.courseTypeId)}/>
                ))}
            </StyledListGroup>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        listData: state.courseType.courseTypeList
    };
};

export default connect(mapStateToProps)(withPaginationList(List, {
    label: "Add Course Type",
    navAdd: constants.ROUTES.ADD_COURSE_TYPE
}))
