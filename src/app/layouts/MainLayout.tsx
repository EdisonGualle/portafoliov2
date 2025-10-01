import { useEffect } from 'react';
import { Outlet, ScrollRestoration, useLocation, useNavigation } from 'react-router-dom';

import Loader from '@shared/components/Loader';
import Footer from '@widgets/Footer';
import Navbar from '@widgets/Navbar';
import Sidebar from '@widgets/Sidebar';
import { useUIStore } from '@stores/uiStore';
import ScrollProgressBar from '@shared/components/ScrollProgressBar';

const MainLayout = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const closeSidebar = useUIStore((state) => state.closeSidebar);

  useEffect(() => {
    closeSidebar();
  }, [location.pathname, closeSidebar]);

  const isNavigating = navigation.state === 'loading';

  return (
    <div className="relative min-h-screen bg-base-100 text-base-content transition-colors">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_55%)]" aria-hidden="true" />
      <ScrollProgressBar />
      <Navbar />
      <Sidebar />
      <main className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-1 flex-col px-5 pb-24 pt-28 md:px-10">
        {isNavigating && <Loader overlay message="Actualizando sección..." />}
        <div className={isNavigating ? 'pointer-events-none opacity-50' : ''}>
          <Outlet />
        </div>
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
