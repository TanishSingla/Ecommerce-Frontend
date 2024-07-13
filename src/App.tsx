import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "./components/Loader";
import Header from "./components/Header";


const Search = lazy(() => import("./pages/search"));
const Home = lazy(() => import("./pages/home"));
const Cart = lazy(() => import("./pages/cart"));
const Shipping = lazy(() => import("./pages/shipping"));
const Login = lazy(() => import("./pages/login"));
const Order = lazy(() => import("./pages/order"));


// Admin Routes
const Dashboard = lazy(() => import("./pages/adminPages/Dashboard"));
const Products = lazy(() => import("./pages/adminPages/Products"));
const Transaction = lazy(() => import("./pages/adminPages/Transaction"));
const Customers = lazy(() => import("./pages/adminPages/Customer"));
const NewProduct = lazy(() => import("./pages/adminPages/management/newProduct"));
const ProductManagement = lazy(() => import("./pages/adminPages/management/ProductManagement"));
const TransactionManagement = lazy(() => import("./pages/adminPages/management/TransactionManagement"));
const BarCharts = lazy(() => import("./pages/adminPages/charts/BarCharts"))
const PieCharts = lazy(() => import("./pages/adminPages/charts/PieCharts"))
const LineCharts = lazy(() => import("./pages/adminPages/charts/LineCharts"))
const Coupons = lazy(() => import("./pages/adminPages/apps/Coupons"))


const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />



          {/* Admin Routes */}
          <Route
          // element={<ProtectedRoute isAuthenticated={true} adminRoute={true} isAdmin={true} />}
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customers />} />
            <Route path="/admin/transaction" element={<Transaction />} />

            {/* Charts */}
            <Route path="/admin/chart/bar" element={<BarCharts />} />
            <Route path="/admin/chart/pie" element={<PieCharts />} />
            <Route path="/admin/chart/line" element={<LineCharts />} />

            {/* Apps */}
            <Route path="/admin/apps/coupon" element={<Coupons />} />

            {/* Management */}
            <Route path="/admin/product/new" element={<NewProduct />} />
            <Route path="/admin/product/:id" element={<ProductManagement />} />
            <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
          </Route>

          {/* Logged in user routes... */}
          <Route>
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/orders" element={<Order />} />
          </Route>


          {/* When User not logged in */}
          <Route path="/login" element={<Login />}></Route>

          {/*  */}
        </Routes>
      </Suspense>
    </Router >
  )
}

export default App
