// import { NavLink, Route, Routes, useNavigate } from "react-router-dom"
// import { assets } from "../../assets/assets"
// import styles from "./products.module.css"
// import React, { Suspense, useState } from "react"
// import Select from "react-select"
// import { motion } from "framer-motion"

// // Lazy load components
// const LightShoes = React.lazy(() =>
// 	import("../../components/productTabs/lightShoes/LightShoes")
// )
// const LightSandals = React.lazy(() =>
// 	import("../../components/productTabs/lightSandals/LightSandals")
// )
// const ChuChuShoes = React.lazy(() =>
// 	import("../../components/productTabs/chuChuShoes/ChuChuShoes")
// )
// const KidsSandals = React.lazy(() =>
// 	import("../../components/productTabs/kidsSandals/KidsSandals")
// )
// const GirlsBoysCollection = React.lazy(() =>
// 	import(
// 		"../../components/productTabs/girls-boys-collection/GirlsBoysCollection"
// 	)
// )
// const MusicalSandals = React.lazy(() =>
// 	import("../../components/productTabs/musicalSandals/MusicalSandals")
// )
// const PuSandals = React.lazy(() =>
// 	import("../../components/productTabs/puSandals/PuSandals")
// )

// const Products = () => {
// 	const navigate = useNavigate()

// 	const options = [
// 		{ value: "lightshoes", label: "Light Shoes" },
// 		{ value: "kids-sandals", label: "Kids Sandals" },
// 		{ value: "chuchushoes", label: "Chu Chu Shoes" },
// 		{ value: "girls-boys-collection", label: "Girls & Boys Collection" },
// 		{
// 			value: "kids-musical-sandal-collection",
// 			label: "Kids Musical Sandal Collection",
// 		},
// 		{ value: "pu-sandals", label: "PU Sandals" },
// 		{ value: "light-sandals", label: "Light Sandals" },
// 	]

// 	const handleSelectChange = (selectedOption) => {
// 		navigate(selectedOption.value)
// 	}

// 	return (
// 		<div className={styles.container}>
// 			<header className={styles.header}>
// 				<motion.img
// 					initial={{ scale: 1.3 }}
// 					animate={{ scale: 1 }}
// 					transition={{ duration: 0.5 }}
// 					src={assets.productPageBanner}
// 					alt="Shoes banner"
// 				/>
// 			</header>
// 			<nav className={styles.nav}>
// 				<NavLink
// 					to="lightshoes"
// 					className={({ isActive }) => (isActive ? styles.active : "")}
// 				>
// 					Light Shoes
// 				</NavLink>
// 				<hr />
// 				<NavLink
// 					to="kids-sandals"
// 					className={({ isActive }) => (isActive ? styles.active : "")}
// 				>
// 					Kids Sandals
// 				</NavLink>
// 				<hr />
// 				<NavLink
// 					to="chuchushoes"
// 					className={({ isActive }) => (isActive ? styles.active : "")}
// 				>
// 					Chu Chu Shoes
// 				</NavLink>
// 				<hr />
// 				<NavLink
// 					to="girls-boys-collection"
// 					className={({ isActive }) => (isActive ? styles.active : "")}
// 				>
// 					Girls & Boys Collection
// 				</NavLink>
// 				<hr />
// 				<NavLink
// 					to="kids-musical-sandal-collection"
// 					className={({ isActive }) => (isActive ? styles.active : "")}
// 				>
// 					Kids Musical Sandal Collection
// 				</NavLink>
// 				<hr />
// 				<NavLink
// 					to="pu-sandals"
// 					className={({ isActive }) => (isActive ? styles.active : "")}
// 				>
// 					PU Sandals
// 				</NavLink>
// 				<hr />
// 				<NavLink
// 					to="light-sandals"
// 					className={({ isActive }) => (isActive ? styles.active : "")}
// 				>
// 					Light Sandals
// 				</NavLink>
// 				<hr />
// 			</nav>
// 			<div className={styles.navDropdown}>
// 				<Select
// 					options={options}
// 					onChange={handleSelectChange}
// 					placeholder="Menu"
// 					className={styles.dropdownSelect}
// 				/>
// 			</div>
// 			<main>
// 				<Suspense
// 					fallback={
// 						<div className={styles.loadingContainer}>
// 							<div className={styles.loader}></div>
// 						</div>
// 					}
// 				>
// 					<Routes>
// 						<Route
// 							path="lightshoes"
// 							element={<LightShoes />}
// 						/>
// 						<Route
// 							path="kids-sandals"
// 							element={<KidsSandals />}
// 						/>
// 						<Route
// 							path="chuchushoes"
// 							element={<ChuChuShoes />}
// 						/>
// 						<Route
// 							path="girls-boys-collection"
// 							element={<GirlsBoysCollection />}
// 						/>
// 						<Route
// 							path="kids-musical-sandal-collection"
// 							element={<MusicalSandals />}
// 						/>
// 						<Route
// 							path="pu-sandals"
// 							element={<PuSandals />}
// 						/>
// 						<Route
// 							path="light-sandals"
// 							element={<LightSandals />}
// 						/>
// 					</Routes>
// 				</Suspense>
// 			</main>
// 		</div>
// 	)
// }

// export default Products

// import { NavLink, Route, Routes, useNavigate } from "react-router-dom"
// import styles from "./products.module.css"
// import React, { useEffect, useState, Suspense } from "react"
// import Select from "react-select"
// import { motion } from "framer-motion"
// import { assets } from "../../assets/assets"

// // Lazy load components
// const FourProduct = React.lazy(() =>
// 	import("../../components/productComponents/fourProduct/FourProduct")
// )

// const Products = () => {
// 	const navigate = useNavigate()
// 	const [categories, setCategories] = useState([])

// 	useEffect(() => {
// 		const fetchCategories = async () => {
// 			try {
// 				const response = await fetch(
// 					"http://localhost:5000/api/products/details"
// 				)
// 				const data = await response.json()
// 				setCategories(data.categories)
// 			} catch (error) {
// 				console.error("Failed to fetch categories:", error)
// 			}
// 		}

// 		fetchCategories()
// 	}, [])

// 	const handleSelectChange = (selectedOption) => {
// 		navigate(selectedOption.value)
// 	}

// 	const options = categories.map((category) => ({
// 		value: category.name.toLowerCase().replace(/\s/g, "-"),
// 		label: category.name,
// 	}))

// 	return (
// 		<div className={styles.container}>
// 			<header className={styles.header}>
// 				<motion.img
// 					initial={{ scale: 1.3 }}
// 					animate={{ scale: 1 }}
// 					transition={{ duration: 0.5 }}
// 					src={assets.productPageBanner}
// 					alt="Shoes banner"
// 				/>
// 			</header>
// 			<nav className={styles.nav}>
// 				{categories.map((category) => (
// 					<React.Fragment key={category._id}>
// 						<NavLink
// 							to={category.name.toLowerCase().replace(/\s/g, "-")}
// 							className={({ isActive }) => (isActive ? styles.active : "")}
// 						>
// 							{category.name}
// 						</NavLink>
// 						<hr />
// 					</React.Fragment>
// 				))}
// 			</nav>
// 			<div className={styles.navDropdown}>
// 				<Select
// 					options={options}
// 					onChange={handleSelectChange}
// 					placeholder="Menu"
// 					className={styles.dropdownSelect}
// 				/>
// 			</div>
// 			<main>
// 				<Suspense
// 					fallback={
// 						<div className={styles.loadingContainer}>
// 							<div className={styles.loader}></div>
// 						</div>
// 					}
// 				>
// 					<Routes>
// 						{categories.map((category) => (
// 							<Route
// 								key={category._id}
// 								path={category.name.toLowerCase().replace(/\s/g, "-")}
// 								element={category.subcategories.map((subcategory) => (
// 									<FourProduct
// 										key={subcategory._id}
// 										title={subcategory.name}
// 										shoes={subcategory.products}
// 									/>
// 								))}
// 							/>
// 						))}
// 					</Routes>
// 				</Suspense>
// 			</main>
// 		</div>
// 	)
// }

// export default Products

// import {
// 	NavLink,
// 	Route,
// 	Routes,
// 	useNavigate,
// 	useLocation,
// } from "react-router-dom"
// import styles from "./products.module.css"
// import React, { useEffect, useState, Suspense } from "react"
// import Select from "react-select"
// import { motion } from "framer-motion"
// import { assets } from "../../assets/assets"

// // Lazy load components
// const FourProduct = React.lazy(() =>
// 	import("../../components/productComponents/fourProduct/FourProduct")
// )

// const Products = () => {
// 	const navigate = useNavigate()
// 	const location = useLocation()
// 	const [categories, setCategories] = useState([])

// 	useEffect(() => {
// 		const fetchCategories = async () => {
// 			try {
// 				const response = await fetch(
// 					"http://localhost:5000/api/products/details"
// 				)
// 				const data = await response.json()
// 				setCategories(data.categories)
// 				if (
// 					location.pathname === "/product-range" &&
// 					data.categories.length > 0
// 				) {
// 					navigate(data.categories[0].name.toLowerCase().replace(/\s/g, "-"))
// 				}
// 			} catch (error) {
// 				console.error("Failed to fetch categories:", error)
// 			}
// 		}

// 		fetchCategories()
// 	}, [location, navigate])

// 	const handleSelectChange = (selectedOption) => {
// 		navigate(selectedOption.value)
// 	}

// 	const options = categories.map((category) => ({
// 		value: category.name.toLowerCase().replace(/\s/g, "-"),
// 		label: category.name,
// 	}))

// 	return (
// 		<div className={styles.container}>
// 			<header className={styles.header}>
// 				<motion.img
// 					initial={{ scale: 1.3 }}
// 					animate={{ scale: 1 }}
// 					transition={{ duration: 0.5 }}
// 					src={assets.productPageBanner}
// 					alt="Shoes banner"
// 				/>
// 			</header>
// 			<nav className={styles.nav}>
// 				{categories.map((category) => (
// 					<React.Fragment key={category._id}>
// 						<NavLink
// 							to={category.name.toLowerCase().replace(/\s/g, "-")}
// 							className={({ isActive }) => (isActive ? styles.active : "")}
// 						>
// 							{category.name}
// 						</NavLink>
// 						<hr />
// 					</React.Fragment>
// 				))}
// 			</nav>
// 			<div className={styles.navDropdown}>
// 				<Select
// 					options={options}
// 					onChange={handleSelectChange}
// 					placeholder="Menu"
// 					className={styles.dropdownSelect}
// 				/>
// 			</div>
// 			<main>
// 				<Suspense
// 					fallback={
// 						<div className={styles.loadingContainer}>
// 							<div className={styles.loader}></div>
// 						</div>
// 					}
// 				>
// 					<Routes>
// 						{categories.map((category) => (
// 							<Route
// 								key={category._id}
// 								path={category.name.toLowerCase().replace(/\s/g, "-")}
// 								element={category.subcategories.map((subcategory) => (
// 									<FourProduct
// 										key={subcategory._id}
// 										title={subcategory.name}
// 										shoes={subcategory.products}
// 									/>
// 								))}
// 							/>
// 						))}
// 					</Routes>
// 				</Suspense>
// 			</main>
// 		</div>
// 	)
// }

// export default Products

import {
	NavLink,
	Route,
	Routes,
	useNavigate,
	useLocation,
} from "react-router-dom"
import styles from "./products.module.css"
import React, { useEffect, useState, Suspense } from "react"
import Select from "react-select"
import { motion } from "framer-motion"
import { assets } from "../../assets/assets"
import { url } from "../../App"

// Lazy load components
const FourProduct = React.lazy(() =>
	import("../../components/productComponents/fourProduct/FourProduct")
)

const NoProducts = () => (
	<div className={styles.noProducts}>
		<h2>No Products Available</h2>
	</div>
)

const Products = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await fetch(`${url}/api/products/details`)
				const data = await response.json()
				setCategories(data.categories)
				setLoading(false)
				if (
					location.pathname === "/product-range" &&
					data.categories.length > 0
				) {
					navigate(data.categories[0].name.toLowerCase().replace(/\s/g, "-"))
				}
			} catch (error) {
				console.error("Failed to fetch categories:", error)
				setLoading(false)
			}
		}

		fetchCategories()
	}, [location, navigate])

	const handleSelectChange = (selectedOption) => {
		navigate(selectedOption.value)
	}

	const options = categories.map((category) => ({
		value: category.name.toLowerCase().replace(/\s/g, "-"),
		label: category.name,
	}))

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<motion.img
					initial={{ scale: 1.3 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.5 }}
					src={assets.productPageBanner}
					alt="Shoes banner"
				/>
			</header>
			{loading ? (
				<div className={styles.loadingContainer}>
					<div className={styles.loader}></div>
				</div>
			) : (
				<>
					<nav className={styles.nav}>
						{categories.map((category) => (
							<React.Fragment key={category._id}>
								<NavLink
									to={category.name.toLowerCase().replace(/\s/g, "-")}
									className={({ isActive }) => (isActive ? styles.active : "")}
								>
									{category.name}
								</NavLink>
								<hr />
							</React.Fragment>
						))}
					</nav>
					<div className={styles.navDropdown}>
						<Select
							options={options}
							onChange={handleSelectChange}
							defaultValue={options[0]}
							placeholder={options[0]?.label || "Menu"}
							className={styles.dropdownSelect}
						/>
					</div>
					<main>
						<Suspense
							fallback={
								<div className={styles.loadingContainer}>
									<div className={styles.loader}></div>
								</div>
							}
						>
							<Routes>
								{categories.map((category) => (
									<Route
										key={category._id}
										path={category.name.toLowerCase().replace(/\s/g, "-")}
										element={
											category.subcategories.length > 0 ? (
												category.subcategories.map((subcategory) => (
													<FourProduct
														key={subcategory._id}
														title={subcategory.name}
														shoes={subcategory.products}
													/>
												))
											) : (
												<NoProducts />
											)
										}
									/>
								))}
							</Routes>
						</Suspense>
					</main>
				</>
			)}
		</div>
	)
}

export default Products
