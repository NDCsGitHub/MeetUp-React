import Todo from "./components/Todo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";




function App() {
  return (
    <Router>
      <MainNavigation />
      <Routes>

        <Route path='/'
          element={
            < AllMeetups />
          }
        />

        <Route path='/new-meetup'
          element={
            < NewMeetup />
          }
        />


        <Route path='/favorites'
          element={
            < Favorites />
          }
        />

      </Routes>
    </Router>

  );
}



export default App;
