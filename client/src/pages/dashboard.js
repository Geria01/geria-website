import { useEffect, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import cookie from 'cookie';

import FullPageLoader from '@/components/FullPageLoader';
import DashboardView from '@/components/DashboardView';
import HelpCenterView from '@/components/HelpCenterView';
import MessagesView from '@/components/MessagesView';
import ProfileView from '@/components/ProfileView';
import SettingsView from '@/components/SettingsView';
import Sidebar from '@/components/Sidebar';
import DashboardTopbar from '@/components/DashboardTopbar';
import useViewport from '@/hooks/useViewport';
import strapiApi, { nextApi } from '@/api';
import { useAuth } from '@/context/auth';

const Dashboard = ({ user }) => {

  const [activeTab, setActiveTab] = useLocalStorageState('active-tab', { defaultValue: 'dashboard' });
  const [showSidebar, setShowSidebar] = useLocalStorageState('show-sidebar', { defaultValue: true });
  const { isMobile } = useViewport(768);
  const [loading, setloading] = useState(false)

  const handleTabSelect = (e, tab) => {
    e.preventDefault;
    setActiveTab(tab);
  };

  const toggleSidebar = (e) => {
    e.preventDefault();
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:768px)');
    mediaQuery.addListener(() => setShowSidebar(!showSidebar));
    return () => mediaQuery.removeListener(() => setShowSidebar(!showSidebar));
  }, [setShowSidebar, showSidebar]);

  if (!user) return <FullPageLoader />;

  return (
    <>
      {
        showSidebar &&
        <Sidebar
          user={user}
          activeTab={activeTab}
          setShowSidebar={setShowSidebar}
          handleTabChange={handleTabSelect}
        />
      }

      <DashboardTopbar
        activeTab={activeTab}
        toggleSidebar={toggleSidebar} />

      <div className={`${isMobile ? 'ml-0' : 'ml-80'}`}>

        {(() => {
          switch (activeTab) {
            case 'dashboard':
              return <DashboardView user={user} />
            case 'messages':
              return <MessagesView />
            case 'profile':
              return <ProfileView user={user} />
            case 'settings':
              return <SettingsView />
            case 'help-center':
              return <HelpCenterView />
            default:
              return null
          }
        })()}
      </div>
    </>
  )
}

export async function getServerSideProps({ req, res }) {

  let token = null;
  let userId = null;
  let user = null;

  if (req.headers.cookie) {
    token = cookie.parse(req.headers.cookie).token;
    userId = cookie.parse(req.headers.cookie).userid;
  }

  if (!token) {
    return res.status(403).json({ message: 'not authorized' });
  }

  const resp = await strapiApi.get(`/api/users/${userId}?populate=*`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return {
    props: {
      user: resp.data
    },
  }
}

export default Dashboard;
