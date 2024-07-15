import React, { createContext, useState, useEffect } from "react"

export const CategoriesContext = createContext()
import { url } from "../App"

export const CategoriesProvider = ({ children }) => {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await fetch(`${url}/api/products/details`)
				const data = await response.json()
				setCategories(data.categories)
			} catch (error) {
				console.error("Failed to fetch categories:", error)
			}
		}

		fetchCategories()
	}, [])

	return (
		<CategoriesContext.Provider value={categories}>
			{children}
		</CategoriesContext.Provider>
	)
}
