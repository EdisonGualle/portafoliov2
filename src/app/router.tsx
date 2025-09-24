import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

const HomePage = lazy(() => import('@pages/Home'));
const AboutPage = lazy(() => import('@pages/About'));
const ExplorePage = lazy(() => import('@pages/Explore'));
const ContactPage = lazy(() => import('@pages/Contact'));
const NotFoundPage = lazy(() => import('@pages/NotFound'));
const ProjectsPage = lazy(() => import('@features/projects/pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('@features/projects/pages/ProjectDetailPage'));
const PostsPage = lazy(() => import('@features/posts/pages/PostsPage'));
const PostDetailPage = lazy(() => import('@features/posts/pages/PostDetailPage'));
const SkillsPage = lazy(() => import('@features/skills/pages/SkillsPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'projects',
        element: <ProjectsPage />
      },
      {
        path: 'projects/:projectId',
        element: <ProjectDetailPage />
      },
      {
        path: 'posts',
        element: <PostsPage />
      },
      {
        path: 'posts/:postId',
        element: <PostDetailPage />
      },
      {
        path: 'skills',
        element: <SkillsPage />
      },
      {
        path: 'explore',
        element: <ExplorePage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);
