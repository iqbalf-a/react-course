import React, {useState} from "react";
import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import constants from "../../../../constants";

const CourseItem = ({data, onNavigateToEdit, onDelete}) => {
    const navigate = useNavigate();
    return (
        <StyledListItem action>
            <Col>
                <h3 className="lead">{data?.title}</h3>
                <p>{data?.description}</p>
            </Col>
            <ButtonGroup>
                <Button variant="primary" onClick={onNavigateToEdit}>Edit</Button>
                <Button variant="danger" onClick={onDelete}>Delete</Button>
                <Button variant="secondary">Download</Button>
            </ButtonGroup>
        </StyledListItem>
    )
}

export default React.memo(CourseItem);
