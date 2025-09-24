import { useEffect } from 'react';
import { Outlet, ScrollRestoration, useLocation, useNavigation } from 'react-router-dom';

import BackgroundDecor from '@shared/components/BackgroundDecor';
import Loader from '@shared/components/Loader';
import ScrollProgressBar from '@shared/components/ScrollProgressBar';
import Footer from '@widgets/Footer';
import Navbar from '@widgets/Navbar';
import Sidebar from '@widgets/Sidebar';
import { useUIStore } from '@stores/uiStore';

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
      <BackgroundDecor />
      <ScrollProgressBar />
      <Navbar />
      <Sidebar />
      <main className="relative mx-auto flex min-h-[70vh] w-full max-w-7xl flex-1 flex-col px-4 pb-24 pt-28 md:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-x-0 top-4 mx-auto h-64 max-w-5xl rounded-full bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 blur-3xl" />
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
