import React from "react";
import "./App.css";
import {AddCourse, CourseList, TypeList, EditCourse, AddCourseType, EditCourseType} from "./pages";
import constants from "./constants";
import NavBarComp from "./components/NavBar";
import {Provider} from "react-redux";
import store from "./store/store";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Login";

const CourseWrapper = () => (
    <>
        <div className={"container text-center"}>
            <h1>Course Page</h1>
        </div>
        <Outlet/>
    </>
)

const TypeWrapper = () => (
    <>
        <div className={"container text-center"}>
            <h1>Type Page</h1>
        </div>
        <Outlet/>
    </>
)


const ProtectedRoutes = ({isLoggedIn, setIsloggedIn}) => {
    if (!isLoggedIn) {
        return <Navigate to={constants.ROUTES.LOGIN} replace={true}/>
    }

    return (
        <>
            <NavBarComp setIsLoggedIn={setIsloggedIn}/>
            <Outlet/>
        </>
    )
}

const Dashboard = () => (
    <>
        <div className={"container text-center"}>
            <h1>Dashboard</h1>
        </div>
    </>
)


function App() {

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    return (
        <Provider store={store}>

            <Routes>
                <Route path={constants.ROUTES.LOGIN} element={<LoginPage isLoggedin={setIsLoggedIn}/>} index={true}/>
                <Route path={constants.ROUTES.DASHBOARD} element={<ProtectedRoutes isLoggedIn={isLoggedIn} setIsloggedIn={setIsLoggedIn}/>}>
                    <Route path={constants.ROUTES.COURSE_LIST} element={<CourseWrapper/>}>
                        <Route element={<CourseList/>} index={true}></Route>
                        <Route path={constants.ROUTES.ADD_COURSE} element={<AddCourse/>}></Route>
                        <Route path={`${constants.ROUTES.EDIT_COURSE}/:courseId?`} element={<EditCourse/>}></Route>
                    </Route>
                    <Route path={constants.ROUTES.COURSE_TYPE} element={<TypeWrapper/>}>
                        <Route element={<TypeList/>} index={true}></Route>
                        <Route path={constants.ROUTES.ADD_COURSE_TYPE} element={<AddCourseType/>}></Route>
                        <Route path={`${constants.ROUTES.EDIT_COURSE_TYPE}/:courseTypeId?`}
                               element={<EditCourseType/>}></Route>
                    </Route>
                </Route>
                <Route path={"*"} element={<h3>Page not found</h3>}></Route>
            </Routes>
        </Provider>
    );
}

export default App;
