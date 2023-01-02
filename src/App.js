import React from "react";
import "./App.css";
import {AddCourse, CourseList, TypeList, EditCourse, AddCourseType, EditCourseType} from "./pages";
import constants from "./constants";
import NavBarComp from "./components/NavBar";
import {Provider} from "react-redux";
import store from "./store/store";
import {Outlet, Route, Routes} from "react-router-dom";


function App() {
    // const [courses, setCourses] = React.useState(courseList);
    // const [courseTypes, setCourseTypes] = React.useState(courseTypeList);
    // const [params, setParams] = React.useState(null);


    return (
        <Provider store={store}>
            <NavBarComp/>
            <Routes>
                <Route path={constants.ROUTES.COURSE_LIST} >
                    <Route element={<CourseList/>} index={true}></Route>
                    <Route path={constants.ROUTES.ADD_COURSE} element={<AddCourse/>}></Route>
                    <Route path={`${constants.ROUTES.EDIT_COURSE}/:courseId?`} element={<EditCourse/>}></Route>
                </Route>
                <Route path={constants.ROUTES.COURSE_TYPE}>
                    <Route element={<TypeList/>} index={true}></Route>
                    <Route path={constants.ROUTES.ADD_COURSE_TYPE} element={<AddCourseType/>}></Route>
                    <Route path={`${constants.ROUTES.EDIT_COURSE_TYPE}/:courseTypeId?`}
                           element={<EditCourseType/>}></Route>
                </Route>
                <Route path={"*"} element={<h3>Page not found</h3>}></Route>
            </Routes>
        </Provider>
    );
}

export default App;
