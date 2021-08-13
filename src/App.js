import { Route, Switch } from "react-router-dom";
import "./App.css";
import Posts from "./components/posts/Posts";
import Post from "./components/posts/Post";

import Nav from "./components/nav/Nav";
import Users from "./components/users/Users";
import User from "./components/users/User";
import About from "./components/about/About";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Switch>
        <Route exact path="/">
          <About></About>
        </Route>
        <Route exact path="/posts">
          <Posts></Posts>
        </Route>
        <Route exact path="/posts/:id">
          <Post></Post>
        </Route>
        <Route exact path="/users">
          <Users></Users>
        </Route>
        <Route exact path="/users/:id">
          <User></User>
        </Route>
        <Route path="*">
          <h1>Что-то пошло не так</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
