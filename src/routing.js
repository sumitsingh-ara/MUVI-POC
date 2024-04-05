// Routing.js
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { UploadAsset } from "./components/UploadAsset/UploadAsset";
import { MainLayout } from "./Layout/MainLayout";
import { CreateContent } from "./components/CreateContent/CreateContent";

export const Routing = ({ updateAuthToken }) => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <App updateAuthToken={updateAuthToken} />
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
      path: "/creation",
      element: (
        <MainLayout>
          <CreateContent />
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
