import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import HomeScreen from "./components/pages/HomeScreen";
import UsersScreen from "./components/pages/UsersScreen";
import TasksScreen from "./components/pages/TasksScreen.js";
import NavScreen from "./components/navigation/NavScreen";
import TaskListScreen from "./components/pages/TaskListScreen";
// import UsersListScreen from "./components/pages/UsersListScreen";
// import ArtilleryListScreen from "./components/pages/ArtilleryListScreen";
// import ServerlessListScreen from "./components/pages/ServerlessListScreen";
import ArtilleryDetailScreen from "./components/pages/ArtilleryDetailScreen";
import ServerlessDetailScreen from "./components/pages/ServerlessDetailScreen";

import "./components/css/App.css";

const App = () => {
  return (
    <Router>
      <NavScreen>
        <Switch>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/users" exact>
            <UsersScreen />
          </Route>
          <Route path="/users/:userId" exact>
            <UsersScreen />
          </Route>
          <Route path="/users/:userId/tasks" exact>
            <TaskListScreen />
          </Route>
          <Route path="/users/:userId/tasks/:taskId" exact>
            <TasksScreen />
          </Route>
          <Route path="/artillery" exact>
            {/* <ArtilleryListScreen /> */}
          </Route>
          <Route path="/artillery/:testId" exact>
            <ArtilleryDetailScreen />
          </Route>
          <Route path="/serverless" exact>
            {/* <ServerlessListScreen /> */}
          </Route>
          <Route path="/serverless/:testId" exact>
            <ServerlessDetailScreen />
          </Route>
          <Redirect to="/" exact />
        </Switch>
      </NavScreen>
    </Router>
  );
};

export default App;
