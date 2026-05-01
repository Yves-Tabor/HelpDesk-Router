import RootLayout from "./components/RootLayout";
import DashboardHome from "./components/DashboardHome";
import TicketsLayout from "./components/TicketsLayout";
import TicketsList from "./components/TicketsList";
import TicketDetail from "./components/TicketDetail";
import TicketDetailInfo from "./components/TicketDetailInfo";
import TicketActivity from "./components/TicketActivity";
import SettingsLayout from "./components/SettingsLayout";
import ProfileSettings from "./components/ProfileSettings";
import NotificationSettings from "./components/NotificationSettings";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
   <Routes>
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<DashboardHome/>}/>
      <Route path="tickets" element={<TicketsLayout/>}>
        <Route path="" element={<TicketsList/>}/>
        <Route path=":id" element={<TicketDetail/>}>
          <Route path="info" element={<TicketDetailInfo/>}/>
          <Route path="activity" element={<TicketActivity/>}/>
        </Route>
      </Route>
      <Route path="settings" element={<SettingsLayout/>}>
        <Route index element={<ProfileSettings/>}/>
        <Route path="notifications" element={<NotificationSettings/>}/>
      </Route>
    </Route>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
  );
}

export default App;
