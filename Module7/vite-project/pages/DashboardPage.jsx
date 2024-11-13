import { useNavigate, Outlet } from "react-router-dom";

export default function DashboardPage() {
  // built-in hook in React Router DOM, returns a function
  const navigate = useNavigate();

  return (
    <div className="DashboardPage componentBox">
      <h1>Dashboard</h1>
      <Outlet /> {/* see next slide */}
      {/* Will render either <DashboardMessages> when the URL is
"/dash/messages", <DashboardTasks> at "/dash/tasks",
or null if it is "/dash" */}
      <button onClick={() => navigate("/dash/tasks")}>Show Tasks</button>
      <button onClick={() => navigate("/dash/messages")}>Show Messages</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
// ++ Move the <Outlet/> below the buttons and observe the change
// Save as DashboardPage.jsx in a new folder called 'pages'
// See next slide for additional content for this file
