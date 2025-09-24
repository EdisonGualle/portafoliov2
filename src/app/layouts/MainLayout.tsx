import { useEffect } from 'react';
import { Outlet, ScrollRestoration, useLocation, useNavigation } from 'react-router-dom';

import Loader from '@shared/components/Loader';
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
    <div className="min-h-screen bg-base-100 text-base-content transition-colors">
      <Navbar />
      <Sidebar />
      <main className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-1 flex-col px-4 pb-20 pt-24 md:px-8">
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
