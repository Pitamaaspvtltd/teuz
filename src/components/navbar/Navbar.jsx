import { Link, useNavigate } from "react-router-dom"
import { assets, navbar } from "../../assets/assets"
import styles from "./navbar.module.css"
import { MediaNav2 } from "./mediaNav2"
const Navbar = () => {
	const navigate = useNavigate()
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
