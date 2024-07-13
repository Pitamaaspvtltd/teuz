import { assets } from "../../assets/assets"
import styles from "./about.module.css"
import { motion } from "framer-motion"

const About = () => {
	return (
		<main className={styles.container}>
			<div className={styles.landing}>
				<motion.img
					initial={{ scale: 1.3 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.5 }}
					src={assets.aboutBg}
					alt="shoes banner"
				/>
			</div>
			<motion.h1
				initial={{ opacity: 0, x: -60 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.4 }}
				className={styles.brand}
			>
				OUR BRAND
			</motion.h1>
			<div className={styles.aboutContainer}>
				<div className={styles.content}>
					<motion.p
						initial={{ opacity: 0, x: -60 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4 }}
					>
						Welcome to TEUZ, your premier partner in providing high-quality,
						innovative footwear for children. At Teuz, we specialize in creating
						products that cater to the diverse needs of young ones, ensuring
						comfort, durability, and style in every step they take. Our
						commitment to excellence makes us the go-to source for businesses
						looking to offer exceptional kids' footwear.
					</motion.p>
					<br />
					<motion.p
						initial={{ opacity: 0, x: -60 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4 }}
					>
						We are dedicated to building strong, mutually beneficial
						relationships with our business partners. From initial consultation
						to after-sales support, we work closely with you to ensure your
						needs are met and your business thrives.
					</motion.p>
					<div className={styles.founders}>
						<div>
							<motion.h2
								initial={{ opacity: 0, x: -60 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4 }}
							>
								MEET OUR
							</motion.h2>
							<motion.h1
								initial={{ opacity: 0, x: -60 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4 }}
							>
								FOUNDERS
							</motion.h1>
						</div>
						<ul>
							<motion.li
								initial={{ opacity: 0, x: -60 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4 }}
							>
								Sh. Surinder Kumar Garg
							</motion.li>
							<motion.li
								initial={{ opacity: 0, x: -60 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4 }}
							>
								Sh. Pawan Gupta
							</motion.li>
							<motion.li
								initial={{ opacity: 0, x: -60 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4 }}
							>
								Sh. Amit Kumar
							</motion.li>
						</ul>
					</div>
				</div>
				<div className={styles.shoesImage}>
					<motion.hr
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 0.5 }}
					/>
					<motion.img
						initial={{ scale: 0.6 }}
						whileInView={{ scale: 1 }}
						transition={{ duration: 0.5 }}
						src={assets.shoesCollection21}
						alt="fancy shoes"
					/>
					<motion.img
						initial={{ scale: 0.6 }}
						whileInView={{ scale: 1 }}
						transition={{ duration: 0.5 }}
						src={assets.shoesCollection22}
						alt="fancy shoes"
					/>
					<motion.img
						initial={{ scale: 0.6 }}
						whileInView={{ scale: 1 }}
						transition={{ duration: 0.5 }}
						src={assets.shoesCollection23}
						alt="fancy shoes"
					/>
				</div>
			</div>
		</main>
	)
}

export default About
