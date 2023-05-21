import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { Provider } from "react-redux";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";
import SearchResultsPage from "./components/SearchResultsPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <Head />
        <Body />
      </Provider>
    </>
  );
}
export default App;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <SearchResultsPage />,
      },
      {
        path: "results/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

// function App() {
//   return (
//     <>
//       <Provider store={store}>
//         <BrowserRouter>
//           <Head />
//         </BrowserRouter>
//         <RouterProvider router={appRouter} />
//       </Provider>
//     </>
//   );
// }
// export default App;

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//     children: [
//       {
//         path: "/",
//         element: <VideoContainer />,
//       },
//       {
//         path: "watch",
//         element: <WatchPage />,
//       },
//       {
//         path: "results",
//         element: <SearchResultsPage />,
//       },
//     ],
//   },
// ]);
