
import {Route, Routes} from "react-router-dom";
import {Home} from "./Component/Home/Home";
import {Header} from "./Component/Home/Header";
import "./styles/app.scss"
import {Login} from "./Component/Login/Login";
import {Register} from "./Component/Register/Register";
import {Posts} from "./Component/Posts/Posts";
import PostList from "./Component/Posts/PostList";
import UploadImageAvatar from "./Component/UploadImageAvatar";
import PostCreate from "./Component/Posts/PostCreate";

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path={'login'} element={<Login/>}/>
              <Route path={'register'} element={<Register/>}/>
              <Route path={'upload-image'} element={<UploadImageAvatar/>}/>
              <Route path={'create-new-posts'} element={<PostCreate/>}/>
              <Route path={'/'} element={<Home/>}>
                  <Route path={'header'} element={<Header/>}/>
                  <Route index element={<Posts/>}/>
                  <Route path={'post-list'} element={<PostList/>}/>
              </Route>
          </Routes>

      </div>
  );
}

export default App;
