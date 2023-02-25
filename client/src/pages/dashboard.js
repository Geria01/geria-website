import { ProtectRoute } from "@/context/AuthContext";

const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

Dashboard.requiresAuth = true;
Dashboard.redirectUnauthenticated = "/signin";

export default Dashboard;
