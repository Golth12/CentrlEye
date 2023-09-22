import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import TokenContext, { TokenProvider } from "./pages//TokenContext"
import Home from "./pages/Home";
import CenPlus from "./pages/CenPlus";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Signinup from "./pages/Signinup";
import SignUpDetails from "./pages/SignUpDetails";
import Events from "./pages/Events";
import ForgotPassword from "./pages/ForgotPassword";
import ProfileDropdownMenu from "./pages/ProfileDropdownMenu";
import ProfilePage from "./pages/ProfilePage";
import EventCreator from "./pages/EventCreator";

export default function App() {
  return (
    <TokenProvider>
    <BrowserRouter>
      <Routes>

          <Route path="/" element={<Layout />}>
          <Route  index element={<Home />} />
          <Route path="Events" element={<Events />} />
          <Route path="CenPlus" element={<CenPlus />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Signinup" element={<Signinup/>} />
          <Route path="SignUpDetails" element={<SignUpDetails/>} />
          <Route path="ForgotPassword" element={<ForgotPassword/>} />
          <Route path="ProfilePage" element={<ProfilePage/>} />
          <Route path="EventCreator" element={<EventCreator/>} />
          <Route path="*" element={<NoPage />} />
          

        </Route>


      </Routes>
    </BrowserRouter>

    </TokenProvider>
  );
}