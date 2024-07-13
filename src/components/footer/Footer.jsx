import { Link } from "react-router-dom"
import { assets, navbar } from "../../assets/assets"
import styles from "./footer.module.css"
import { FaSquareXTwitter } from "react-icons/fa6"

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.footer}>
				<div className={styles.footerleft}>
					<img
						className={styles.logo}
						src={assets.logo}
						alt="teuz logo"
					/>
					<ul>
						<li>
							<img
								src={assets.instagram}
								alt="instagram"
							/>
						</li>
						<li>
							<img
								src={assets.facebook}
								alt="facebook"
							/>
						</li>
						<li>
							<img
								src={assets.twitter}
								alt="twitter"
							/>
						</li>
					</ul>
				</div>
				<ul className={styles.footermiddle}>
					{navbar.map((nav) => (
						<li key={nav.title}>
							<Link to={nav.href}>{nav.title}</Link>
						</li>
					))}
				</ul>
				<ul className={styles.footerRight}>
					<li>
						<span>Address</span>
						<address>969,M.I.E. Part A, Bahadurgarh-124507 Haryana</address>
					</li>
					<li>
						<span>Contact</span>
						<a href="tel:+919891565755">+91 9891565755</a>
						<a href="tel:+919811155339">+91 9811155339</a>
						<a href="tel:+919350233544">+91 9350233544</a>
					</li>
					<li>
						<span>Mail</span>
						<a href="mailto:teuzfootwearindustries2022@gmail.com">
							teuzfootwearindustries2022@gmail.com
						</a>
					</li>
				</ul>
			</div>
			<div className={styles.copyright}>
				<p>© 2024 TEUZ Shoes & Sandals, All Rights Reserved.</p>
				<p>
					Designed by <Link to={"https://www.pitamaas.com"}>PITAMAAS</Link>
				</p>
			</div>
		</footer>
	)
}

export default Footer
