import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './features/auth/components/Login';
import SignUp from './features/auth/components/SignUp';
import PageNotFound from './pages/PageNotFound';
import HomeScreen from './pages/HomeScreen';
import LoggedNavBar from './features/navbar/LoggedNavBar';
import Example from './Example';
import UserProfile from './features/user/components/UserProfile';
import Setting from './features/user/components/Setting';
import CreatePost from './features/post/components/CreatePost';
import PostDetails from './features/post/components/PostDetails';

const router = createBrowserRouter([
  {
    path:"/",
    element: <HomeScreen />
  },
  {
    path:"/create-post",
    element: <CreatePost />
  },
  {
    path:"/post",
    element: <PostDetails />
  },
  {
    path:"/global",
    element: <LoggedNavBar />
  },

  {
    path :"/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/profile",
    element: <UserProfile />
  },
  {
    path: "/setting",
    element: <Setting />
  },
  {
    path: "/ex",
    element: <Example />
  },
  
  {
    path: "*",
    element:<PageNotFound />
  }
]
 );
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
