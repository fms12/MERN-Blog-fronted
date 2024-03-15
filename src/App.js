import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./features/auth/components/Login";
import SignUp from "./features/auth/components/SignUp";
import PageNotFound from "./pages/PageNotFound";
import HomeScreen from "./pages/HomeScreen";
// import LoggedNavBar from "./features/navbar/LoggedNavBar";
import Example from "./Example";
import UserProfile from "./features/user/components/UserProfile";
import Setting from "./features/user/components/Setting";
import CreatePost from "./features/post/components/CreatePost";
import PostDetails from "./features/post/components/PostDetails";
import PostFeedPage from "./pages/PostFeedPage";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/auth/authSlice";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import { useEffect } from "react";
import Protected from "./features/auth/components/Protected";
import Logout from "./features/auth/components/Logout";
import { fetchPostByFiltersAsync } from "./features/post/postSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    children: [
      {
        path: "/create-post",
        element: (
          <Protected>
            <CreatePost />
          </Protected>
        ),
      },
      {
        path: "/update/:slug",
        element: (
          <Protected>
            <CreatePost />
          </Protected>
        ),
      },
      {
        path: "/setting",
        element: (
          <Protected>
            <Setting />
          </Protected>
        ),
      },
      {
        path: "/profile",
        element: (
          <Protected>
            <UserProfile />
          </Protected>
        ),
      },
      {
        path: "/logout",
        element: (
          <Protected>
            <Logout />
          </Protected>
        ),
      },
      {
        path: "/post-detail/:slug",
        element: <PostDetails />,
      },
      {
        path: "",
        element: <PostFeedPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    dispatch(fetchPostByFiltersAsync());
  }, [dispatch]);
  useEffect(() => {
    if (user) {
      dispatch(fetchLoggedInUserAsync());
    }
  }, [user, dispatch]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
