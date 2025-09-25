import "./App.css";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import TestimonialsPage from "./components/TestimonialsPage";
import ConditionsWeTreat from "./components/ConditionsWeTreat";
import TreatmentsAndServices from "./components/TreatmentsAndServices";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";


function App() {
  return( 
  <RouterProvider router={appRouter} />);
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header /> {/* Persistent header */}
        <Outlet /> {/* Pages render here */}
        <Footer/>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/testimonials",
        element: <TestimonialsPage />,
      },
      {
        path: "/conditionsWeTreat",
        element: <ConditionsWeTreat />,
      },
      {
        path: "/TreatmentsAndServices",
        element: <TreatmentsAndServices />,
      },
        { path: "PrivacyPolicy", element: <PrivacyPolicy /> },
        {path:"TermsAndConditions", element:<TermsAndConditions/>}
    ],
  },
]);
export default App;
