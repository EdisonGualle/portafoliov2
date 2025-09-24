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
    <div className="relative min-h-screen overflow-hidden bg-transparent text-base-content transition-colors">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-mesh-gradient" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-slate bg-[length:24px_24px] opacity-30" aria-hidden="true" />
      <ScrollProgressBar />
      <Navbar />
      <Sidebar />
      <main className="relative mx-auto flex min-h-[70vh] w-full max-w-6xl flex-1 flex-col px-4 pb-20 pt-28 md:px-8">
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
