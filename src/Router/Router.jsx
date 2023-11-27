import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import SurveysPage from './../Pages/SurveysPage/SurveysPage';
import GoPro from './../Pages/GoPro/GoPro';
import ManageUsers from './../Pages/Dashboard/Admin/ManageUsers/ManageUsers';
import Payments from './../Pages/Dashboard/Admin/Payments/Payments';
import SurveyResponses from './../Pages/Dashboard/Admin/SurveyResponses/SurveyResponses';
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import AdminHome from './../Pages/Dashboard/Admin/AdminHome/AdminHome';
import Signin from "../Signin/Signin";
import SignUp from "../Pages/SignUp/SignUp";
import SurveyorHome from './../Pages/Dashboard/Surveyor/SurveyorHome/SurveyorHome';
import CreateSurvey from "../Pages/Dashboard/Surveyor/CreateSurvey/CreateSurvey";
import ManageSurvey from './../Pages/Dashboard/Surveyor/ManageSurvey/ManageSurvey';
import UserReport from './../Pages/Dashboard/Surveyor/UserReport/UserReport';
import SurveyorSurveyResponses from './../Pages/Dashboard/Surveyor/SurveyorSurveyResponses/SurveyorSurveyResponses';
import SurveyDetails from "../Pages/SurveysPage/SurveyDetails/SurveyDetails";
import StartSurvey from "../Pages/SurveysPage/StartSurvey/StartSurvey";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../PrivateRoute/AdminRoute";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            // common
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/surveysPage",
                element: <SurveysPage />
            },
            {
                path: "/surveyDetails/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/api/v1/${params.id}/survey-details`),
                element: <SurveyDetails />,
            },
            {
                path: "/startSurvey/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/api/v1/${params.id}/survey-details`),
                element: <StartSurvey />
            },
            {
                path: "/goPro",
                element: <GoPro />
            },
        ]
    },
    // signin and signup
    {
        path: "/signin",
        element: <Signin />
    },
    {
        path: "/signUp",
        element: <SignUp />
    },

    // start dashboard

    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            // surveyor dashboard
            {
                path: "/dashboard/surveyorHome",
                element: <SurveyorHome />
            },
            {
                path: "/dashboard/createSurvey",
                element: <CreateSurvey />
            },
            {
                path: "/dashboard/manageSurvey",
                element: <ManageSurvey />
            },
            {
                path: "/dashboard/surveyor/surveyResponses",
                element: <SurveyorSurveyResponses />
            },
            {
                path: "/dashboard/userReport",
                element: <UserReport />
            },
            // admin dashboard
            {
                path: "/dashboard/adminHome",
                element:<AdminRoute> <AdminHome /></AdminRoute>
            },
            {
                path: "/dashboard/manageUsers",
                element: <AdminRoute><ManageUsers /></AdminRoute>
            },
            {
                path: "/dashboard/payments",
                element: <AdminRoute><Payments /></AdminRoute>
            },
            {
                path: "/dashboard/admin/surveyResponses",
                element: <AdminRoute><SurveyResponses /></AdminRoute>
            }
        ]
    }



])
export default Router