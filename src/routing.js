// Routing.js
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { UploadAsset } from "./components/UploadAsset/UploadAsset";
import { MainLayout } from "./Layout/MainLayout";
import { ShowVideos } from "./components/showVideos/ShowVideos";

export const Routing = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <App />
        </MainLayout>
      ),
    },
    {
      path: "/upload",
      element: (
        <MainLayout>
          <UploadAsset />
        </MainLayout>
      ),
    },
    {
      path: "/videos",
      element: (
        <MainLayout>
          <ShowVideos />
        </MainLayout>
      ),
    },
  ]);
  return (
    <RouterProvider router={routes}>
      <Route />
    </RouterProvider>
  );
};
