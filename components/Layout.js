import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { AuthProvider } from "./Authprovider";
const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <div className="content">
        <Header />
        {children}
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default Layout;
