import React from 'react';
import {
    Form, Button, ButtonGroup
} from "react-bootstrap";
import {FormInput, StyledContainer} from "../../components";

import {StyledTitle} from "./styles";
import useAddCourseType from './useAddCourseType';
import {addCourseType} from "../../store/actions/courseTypeAction";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import constants from "../../constants";

const FORM_LIST = [
    {id: "typeName", label: "Type Name", type: "text", placeholder: "Enter course type name"},
]

const AddCourseType = ({onNavigate, addCourseType}) => {
    const {getter, setter} = useAddCourseType();
    const navigate = useNavigate();
    const handleSubmit = () => {
        // setCourseTypes((prevState) => {
        //     const newCourseTypes = {...prevState};
        //     const payload = {
        //         ...getter,
        //         courseTypeId: Math.random().toString()
        //     }
        //     newCourseTypes?.data?.push(payload);
        //     return newCourseTypes;
        // })
        addCourseType(getter);
        navigate(constants.ROUTES.COURSE_TYPE);
    }

    return (
        <StyledContainer>
            <StyledTitle>Add Course</StyledTitle>
            <Form>
                {FORM_LIST.map(item => (
                    <FormInput
                        label={item.label}
                        type={item.type}
                        value={getter[item.id]}
                        onChange={setter[item.id]}
                        placeholder={item.placeholder}
                        key={item.id}
                    />
                ))}
                <ButtonGroup>
                    <Button variant="success" onClick={handleSubmit} disabled={getter.isDisable}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={() => navigate(constants.ROUTES.COURSE_TYPE)}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCourseType: (data) => dispatch(addCourseType(data))
    }
}

export default connect(null, mapDispatchToProps)(AddCourseType);
