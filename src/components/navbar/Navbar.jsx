import { Link, useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { assets, navbar } from "../../assets/assets"
import styles from "./navbar.module.css"
import { MediaNav2 } from "./mediaNav2"
const Navbar = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const isNavbarLink = navbar.some((nav) => nav.href === location.pathname)
	if (isNavbarLink) {
		window.scrollTo(0, 0)
	}

	return (
		<div className={styles.container}>
			<img
				src={assets.logo}
				alt="Teuz logo"
				onClick={() => navigate("/")}
			/>
			<div className={styles.medianav}>
				<MediaNav2 />
			</div>
			<nav>
				<ul>
					{navbar.map((nav) => (
						<li key={nav.title}>
							<Link to={nav.href}>{nav.title}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
