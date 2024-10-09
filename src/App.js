import Footer from "./Components/Utility/Footer";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import HomePage from "./Page/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Page/Auth/LoginPage";
import RegisterPage from "./Page/Auth/RegisterPage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrandfPage from "./Page/Brand/AllBrandfPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import ProductDetailsPage from "./Page/Products/ProductDetailsPage";
import CartPage from "./Page/Cart/CartPage";
import ChoosePayMethoudPage from "./Page/Checkout/ChoosePayMethoudPage";
import AdminAllProductsPage from "./Page/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Page/Admin/AdminAllOrdersPage";
import AdminOrderDetailPage from "./Page/Admin/AdminOrderDetailPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Page/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./Page/Admin/AdminAddProductsPage";
import UserAllOrderPage from "./Page/User/UserAllOrderPage";
import UserFavouriteProductsPage from "./Page/User/UserFavouriteProductsPage";
import UserAllAddressesPage from "./Page/User/UserAllAddressesPage";
import UserAddAddressPage from "./Page/User/UserAddAddressPage";
import UserEditAddressPage from "./Page/User/UserEditAddressPage";
import UserProfilePage from "./Page/User/UserProfilePage";
import AdminEditProductsPage from "./Page/Admin/AdminEditProductsPage";
import ForgetPasswordPage from "./Page/Auth/ForgetPasswordPage";
import VerifyPasswordPage from "./Page/Auth/VerifyPasswordPage";
import ResetPasswordPage from "./Page/Auth/ResetPasswordPage";
import AdminAddCouponPage from "./Page/Admin/AdminAddCouponPage";
import AdminEditCouponPage from "./Page/Admin/AdminEditCouponPage";
import ProtectedRouteHook from "./hook/auth/protected-route-hook";
import ProtectedRoute from './Components/Utility/ProtectedRoute';
import ProductsByCategory from "./Page/Products/ProductsByCategory";


function App() {

  const [isUser, isAdmin, userData] =ProtectedRouteHook()


  return (
    <div>
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandfPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/user/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/user/verify-code" element={<VerifyPasswordPage />} />
          <Route path="/user/reset-password" element={<ResetPasswordPage />} />
          <Route path="/products/category/:id" element={<ProductsByCategory />} />

          

        <Route element={<ProtectedRoute auth={isAdmin}/>}>
          <Route path="/admin/allorders" element={ <AdminAllOrdersPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetailPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage  />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage  />} />
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage  />} />
          <Route path="/admin/addproduct" element={<AdminAddProductsPage  />} />
          <Route path="/admin/addcoupon" element={<AdminAddCouponPage />} />
          <Route path="/admin/editcoupon/:id" element={<AdminEditCouponPage />} />
          <Route path="/admin/edit-product/:id" element={<AdminEditProductsPage />} />
        </Route>


        <Route element={<ProtectedRoute auth={isUser}/>}>
          <Route path="/user/allorders" element={<UserAllOrderPage  />} />

          <Route path="/order/paymethoud" element={<ChoosePayMethoudPage  />} />

          <Route path="/user/favouriteproducts" element={<UserFavouriteProductsPage  />} />
          <Route path="/user/addresses" element={<UserAllAddressesPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address/:id" element={<UserEditAddressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
        </Route>  


        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
