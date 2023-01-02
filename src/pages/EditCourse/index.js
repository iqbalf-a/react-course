import React from "react";
import {ButtonGroup, Form, Button} from "react-bootstrap";

import {FormInput, StyledContainer} from "../../components";
import constants from "../../constants";
import {getCourseById} from "../../services/courseApi";
import {editCourse} from "../../store/actions/courseAction";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";

const inititialData = {
    // title: "",
    // description: "",
    // typeId: "",
    // file: "null",
    // duration: "",
    // level: "",
    title: "",
    description: "",
    link: "null",
    courseInfo: {
        duration: "",
        level: ""
    },
    courseType: {
        courseTypeId: "",
        typeName: "",
    }
};

const EditCourse = ({editCourse}) => {
    const [data, setData] = React.useState(inititialData);
    const location = useLocation();
    let query = new URLSearchParams(location.search);
    let courseId = query.get('courseId');

    const navigate = useNavigate();

    React.useEffect(() => {
        const course = getCourseById(courseId);
        setData(course);
    }, [courseId])


    const handleChange = (name) => (e) => {
        setData((prevData) => ({
            ...prevData,
            [name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            courseId: courseId,
            ...data,
        };
        delete payload.file;
        delete payload.typeId;

        editCourse(payload);
        navigate(constants.ROUTES.COURSE_LIST);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        navigate(constants.ROUTES.COURSE_LIST)
    };

    return (
        <StyledContainer>
            <Form>
                <FormInput label={"Title"} type={"text"} placeholder={"Enter title"} value={data.title}
                           onChange={handleChange("title")}/>
                <FormInput label={"Description"} type={"textarea"} placeholder={"Enter description"}
                           value={data.description} onChange={handleChange("description")}/>
                <FormInput label={"Course Type Id"} type={"text"} placeholder={"Enter course type"}
                           value={data?.courseType?.courseTypeId} disabled={true}/>
                <FormInput label={"Course material"} type={"file"} id={"file"} disabled={true}/>
                <FormInput label={"Duration"} type={"text"} placeholder={"Enter duration"}
                           value={data?.courseInfo?.duration} onChange={handleChange("duration")}/>
                <FormInput label={"Level"} type={"text"} placeholder={"Enter level"} value={data?.courseInfo?.level}
                           onChange={handleChange("level")}/>
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
        editCourse: (data) => dispatch(editCourse(data))
    }
}

export default connect(null, mapDispatchToProps)(EditCourse)
