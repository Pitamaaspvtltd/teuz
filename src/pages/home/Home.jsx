import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { assets, homeCollection, trendingShoes } from "../../assets/assets"
import Testimonials from "../../components/testimonials/Testimonials"
import styles from "./home.module.css"
const Home = () => {
	const navigate = useNavigate()
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<motion.img
					initial={{ scale: 1.3 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.5 }}
					src={assets.homeHeaderBg}
					alt=""
				/>
			</header>
			<main>
				<div className={styles.collections}>
					<motion.h1
						initial={{ scale: 1.1 }}
						whileInView={{ scale: 1 }}
						transition={{ duration: 0.4 }}
					>
						COLLECTION
					</motion.h1>
					<div className={styles.homeCollection}>
						{homeCollection.map((shoes) => (
							<motion.div
								initial={{ scale: 0.7 }}
								whileInView={{ scale: 1 }}
								transition={{ duration: 0.5 }}
							>
								<img
									src={shoes.img}
									alt={shoes.name}
								/>
								<p>{shoes.name}</p>
							</motion.div>
						))}
					</div>
				</div>
				<div className={styles.shoesGrid}>
					<div className={styles.leftShoeGrid}>
						<motion.img
							initial={{ scale: 0.7 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 0.5 }}
							src={assets.shoesCollection9}
							alt="Best Shoes"
							className={styles.shoeGrid1}
						/>
					</div>
					<div className={styles.rightShoeGrid}>
						<motion.img
							initial={{ x: 50 }}
							whileInView={{ x: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							src={assets.shoesCollection10}
							alt="best Shoes"
							className={styles.shoeGrid2}
						/>
						<motion.img
							initial={{ x: -50 }}
							whileInView={{ x: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							src={assets.shoesCollection11}
							alt="best Shoes"
							className={styles.shoeGrid3}
						/>
						<motion.img
							initial={{ x: 50 }}
							whileInView={{ x: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							src={assets.shoesCollection12}
							alt="best Shoes"
							className={styles.shoeGrid4}
						/>
						<motion.img
							initial={{ x: -50 }}
							whileInView={{ x: 0 }}
							whileTap={{ scale: 0.65 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							src={assets.viewall}
							alt="best Shoes"
							className={styles.shoeGrid5}
							onClick={() => navigate("/product-range/light-shoes")}
						/>
					</div>
				</div>
				<div className={styles.banner}>
					<motion.img
						src={assets.homeBanner}
						alt="Banner"
						initial={{ scale: 1.2 }}
						whileInView={{ scale: 1 }}
						transition={{ duration: 0.5 }}
					/>
				</div>
				<div className={styles.trendingShoes}>
					<h1>TRENDING</h1>
					<div>
						{trendingShoes.map((shoes, index) => (
							<motion.img
								initial={{ scale: 1.2 }}
								whileInView={{ scale: 1 }}
								transition={{ duration: 0.5 }}
								whileTap={{ scale: 0.7 }}
								src={shoes}
								alt="Trending Shoes"
								key={index}
							/>
						))}
					</div>
				</div>
				<div className={styles.homebanner2}>
					<motion.img
						initial={{ opacity: 0.5 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						src={assets.homeBanner2}
						alt=""
					/>
				</div>
				<div className={styles.about}>
					<h1>ABOUT US</h1>
					<p>
						Welcome to Teuz Footwear Industries, your trusted partner in premium
						children's footwear. Established in 2022 in Bahadurgarh, Haryana,
						Teuz has quickly become a leading name in the kids' footwear market.
						With over 100 dealers across India, we are dedicated to providing
						high-quality, stylish, and comfortable shoes that children love and
						parents trust.
					</p>
				</div>
				<Testimonials />
			</main>
		</div>
	)
}

export default Home
