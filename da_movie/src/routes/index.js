import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom"
import DetailPage from "../pages/DetailPage"
import MainPage from '../pages/MainPage'

const router = createBrowserRouter([
    {
        path: "/movies",
        element: <MainPage></MainPage>
    },
    {
        path: "/movies/:id",
        element: <DetailPage></DetailPage>
    }
])

export default router