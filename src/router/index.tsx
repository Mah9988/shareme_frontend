import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreatePin from "../components/createPin/CreatePin";
import Feed from "../components/feed/Feed";
import Login from "../components/login/login";
import Pin from "../components/pin/Pin";
import PinDetails from "../components/pinDetails/PinDetails";
import Search from "../components/search/Search";
import UserProfile from "../components/userProfile/UserProfile";
import Home from "../pages/Home";
import Pins from "../pages/Pins";
import NotFound from "../components/notFound";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/category/:categortId",
        element: <Feed />,
      },
      {
        path: "/pin-detail/:pinId",
        element: <PinDetails />,
      },
      {
        path: "/create-pin",
        element: <CreatePin />,
      },
      {
        path: "/user-profile/:userId",
        element: <UserProfile />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
