import Footer from "../Footer";
import Header from "../Header";
import { memo } from "react";
const Layout = memo(({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="px-24 grow py-4">{children}</div>
      <Footer />
    </div>
  );
});
export default Layout;
