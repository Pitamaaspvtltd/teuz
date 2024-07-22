import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Contact from "./pages/contact/Contact"
import About from "./pages/about/About"
import { useContext, useEffect } from "react"
import Products from "./pages/products/Products"
// import { CategoriesContext } from "./context/contex"
export const url = "https://teuzbackend.onrender.com"

const App = () => {
	const location = useLocation()
	// useEffect(() => {
	// 	window.scrollTo(0, 0)
	// }, [location])

	return (
		<div>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/about-us"
					element={<About />}
				/>{" "}
				<Route
					path="/product-range/*"
					element={<Products />}
				/>
				{/* <Route
					path="/product-range"
					element={<Navigate to="/product-range/light-shoes" />}
				/> */}
				{/* {categories.length > 0 && (
					<Route
						path="/product-range"
						element={
							<Navigate
								to={`/product-range/${categories[0].name
									.toLowerCase()
									.replace(/\s/g, "-")}`}
							/>
						}
					/>
				)} */}
				<Route
					path="/contact-us"
					element={<Contact />}
				/>
			</Routes>
			<Footer />
		</div>
	)
}

export default App
