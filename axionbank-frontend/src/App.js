import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Redirect from "./pages/Redirect";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RegistrationSuccessful from "./pages/RegistrationSuccessful";

function App() {
    const routes = createBrowserRouter([
        { path: "/", element: <Redirect /> },
        { path: "/Login", element: <Login /> },
        { path: "/Register", element: <Register /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/sucessful", element: <RegistrationSuccessful /> },
    ]);

    return <RouterProvider router={routes} />;
}

export default App;
