import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Outlet, useMatches } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/Breadcrumb";
import Timer from "../../components/Home/Timer";

function RootLayout() {
  const routeMatches = useMatches();
  // console.log(routeMatches);

  let rootLayoutSettings = {
    bannerImg: "",
    showTimer: false,
    showBreadcrumb: true,
  };

  if (Array.isArray(routeMatches)) {
    routeMatches.forEach((routeMatch) => {
      if (routeMatch.handle && typeof routeMatch.handle == "object") {
        rootLayoutSettings = { ...rootLayoutSettings, ...routeMatch.handle };
      }
    });
  }

  const { bannerImg, showTimer, showBreadcrumb } = rootLayoutSettings;

  return (
    <>
      <Header />
      <Navbar />

      {bannerImg ? (
        <>
          <img src={bannerImg} alt="" className="w-full max-h-96 object-cover min-h-[160px]" />
        </>
      ) : (
        <></>
      )}

      {showTimer ? <Timer /> : ""}

      {showBreadcrumb ? <Breadcrumb /> : ""}

      <Outlet />

      <Footer />
    </>
  );
}

export default RootLayout;
