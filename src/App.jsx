import LeftSideBar from "./leftsidebar";
import TopNavBar from "./topNavBar";
import Share from "./Share";
import RightSideBar from "./RightSideBar";
import { Posts, Users } from "./dummyData";
import { Stack } from "@mui/material";
import Feed from "./feed";
import BackdropImage from "./BackdropImage";
import RightProfileBar from "./RightProfileBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route></Route>
      </Switch>
    </Router>
    // <>
    //   <TopNavBar />
    //   <main className="content-container">
    //     <LeftSideBar />
    //     <Stack spacing={3}>
    //       <BackdropImage />
    //       <Stack direction="row">
    //         <div className="content-child">
    //           <Share />
    //           <Feed data={Posts} Users={Users} />
    //         </div>
    //         <RightProfileBar data={Users} />
    //       </Stack>
    //     </Stack>
    //   </main>
    // </>
  );
}
