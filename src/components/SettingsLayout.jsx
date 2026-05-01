import { Link, Outlet } from "react-router-dom";

function SettingsLayout() {
  return (
    <div className="settings-layout">
      <div className="page-header">
        <h2>Settings</h2>
        <p className="page-subtitle">Manage your account preferences</p>
      </div>

      <div className="settings-container">
         <div className="settings-sidebar">
          {/*<div className="settings-tab active">Profile</div>
          <div className="settings-tab">Notifications</div>*/}
          {/* trainees: convert these to proper navigation with active styling */}
          <Link className="settings-tab active" to=".">Profile</Link>
          <Link className="settings-tab" to="notifications">Notifications</Link>
        </div>

        <div className="settings-content">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default SettingsLayout;
