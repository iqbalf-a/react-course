import React from "react";
import {ButtonGroup, Form, Button} from "react-bootstrap";

import {FormInput, StyledContainer} from "../../components";
import constants from "../../constants";
import {getCourseTypeById} from "../../services/courseApi";
import {connect} from "react-redux";
import {editCourseType} from "../../store/actions/courseTypeAction";
import {useLocation, useNavigate} from "react-router-dom";

const inititialData = {
    typeName: "",
};

const EditCourseType = ({editCourseType}) => {
    const [data, setData] = React.useState(inititialData);
    const location = useLocation();
    let query = new URLSearchParams(location.search);
    let courseTypeId = query.get('courseTypeId');

    const navigate = useNavigate();

    React.useEffect(() => {
        const courseType = getCourseTypeById(courseTypeId);
        setData(courseType);
    }, [courseTypeId])

    const handleChange = (name) => (e) => {
        setData((prevData) => ({
            ...prevData,
            [name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            courseTypeId: courseTypeId,
            ...data,
        };
        delete payload.typeId;

        editCourseType(payload);
        navigate(constants.ROUTES.COURSE_TYPE);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        navigate(constants.ROUTES.COURSE_TYPE);
    };

    return (
        <StyledContainer>
            <Form>
                <FormInput label={"Type Name"} type={"text"} placeholder={"Enter type name"} value={data.typeName}
                           onChange={handleChange("typeName")}/>
                <ButtonGroup size={"lg"}>
                    <Button onClick={handleSubmit} variant={"primary"}>Apdet</Button>
                    <Button onClick={handleCancel} variant={"secondary"}>Kensel</Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        editCourseType: (data) => dispatch(editCourseType(data))
    }
}

export default connect(null, mapDispatchToProps)(EditCourseType)
