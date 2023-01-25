import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom"
import DetailPage from "../pages/DetailPage"
import MainPage from '../pages/MainPage'

const router = createBrowserRouter([
    {
        path: "/movies/:id",
        element: <DetailPage></DetailPage>
    },
    {
        path: "*",
        element: <MainPage></MainPage>
    },
])

export default router