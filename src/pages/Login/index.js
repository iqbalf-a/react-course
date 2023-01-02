import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import constants from "../../constants";

const LoginPage = ({isLoggedin}) => {
    const navigate = useNavigate();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        isLoggedin(true);
        navigate(constants.ROUTES.DASHBOARD);
    }
    return (
        <>
            <Form className="container mt-5" onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default LoginPage;