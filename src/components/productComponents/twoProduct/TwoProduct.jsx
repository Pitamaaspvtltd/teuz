import styles from "./twoProduct.module.css"
import { motion } from "framer-motion"
const TwoProduct = ({ title, shoes }) => {
	return (
		<div className={styles.components}>
			<motion.h1
				initial={{ opacity: 0.5, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
			>
				{title}
			</motion.h1>
			<div className={styles.shoeContainer}>
				{shoes.map((item) => (
					<motion.div
						initial={{ opacity: 0.5, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						className={styles.shoes}
					>
						<img
							src={item.img}
							alt=""
							style={{ backgroundColor: item.bg }}
						/>
						<div>
							<p>{item.name || ""}</p>
							<p>{item.color || ""}</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default TwoProduct
