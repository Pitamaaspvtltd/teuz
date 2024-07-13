// import styles from "./fourProduct.module.css"
// import { motion } from "framer-motion"
// const FourProduct = ({ shoes, title }) => {
// 	return (
// 		<div className={styles.components}>
// 			<motion.h1
// 				initial={{ opacity: 0.5, y: 50 }}
// 				whileInView={{ opacity: 1, y: 0 }}
// 				transition={{ duration: 0.4 }}
// 				className={styles.shoes}
// 			>
// 				{title}
// 			</motion.h1>
// 			<div className={styles.shoeContainer}>
// 				{shoes.map((item) => (
// 					<motion.div
// 						initial={{ opacity: 0.5, y: 50 }}
// 						whileInView={{ opacity: 1, y: 0 }}
// 						transition={{ duration: 0.4 }}
// 						className={styles.shoes}
// 					>
// 						<img
// 							src={item.img}
// 							alt=""
// 							style={{ backgroundColor: item.bg }}
// 						/>
// 						<div>
// 							<p>{item.name || ""}</p>
// 							<p>{item.color || ""}</p>
// 						</div>
// 					</motion.div>
// 				))}
// 			</div>
// 		</div>
// 	)
// }

// export default FourProduct

// import React, { useState } from "react"
// import styles from "./fourProduct.module.css"
// import { motion } from "framer-motion"
// import Modal from "react-modal"
// import { RxCross2 } from "react-icons/rx"

// const FourProduct = ({ shoes, title }) => {
// 	const [modalIsOpen, setModalIsOpen] = useState(false)
// 	const [selectedShoe, setSelectedShoe] = useState(null)

// 	const openModal = (shoe) => {
// 		setSelectedShoe(shoe)
// 		setModalIsOpen(true)
// 	}

// 	const closeModal = () => {
// 		setModalIsOpen(false)
// 		setSelectedShoe(null)
// 	}

// 	return (
// 		<div className={styles.components}>
// 			<motion.h1
// 				initial={{ opacity: 0.5, y: 50 }}
// 				whileInView={{ opacity: 1, y: 0 }}
// 				transition={{ duration: 0.4 }}
// 				className={styles.shoes}
// 			>
// 				{title}
// 			</motion.h1>
// 			<div className={styles.shoeContainer}>
// 				{shoes.map((item, index) => (
// 					<motion.div
// 						key={index}
// 						initial={{ opacity: 0.5, y: 50 }}
// 						whileInView={{ opacity: 1, y: 0 }}
// 						transition={{ duration: 0.4 }}
// 						className={styles.shoes}
// 						onClick={() => openModal(item)}
// 					>
// 						<img
// 							src={item.img}
// 							alt=""
// 							style={{ backgroundColor: item.bg }}
// 						/>
// 						<div>
// 							<p>{item.name || ""}</p>
// 							<p>{item.color || ""}</p>
// 						</div>
// 					</motion.div>
// 				))}
// 			</div>

// 			<Modal
// 				isOpen={modalIsOpen}
// 				onRequestClose={closeModal}
// 				contentLabel="Shoe Details"
// 				style={{
// 					content: {
// 						width: "80%",
// 						height: "auto",
// 						maxWidth: "900px",
// 						top: "55%",
// 						left: "50%",
// 						right: "auto",
// 						bottom: "auto",
// 						transform: "translate(-50%, -50%)",
// 						padding: "20px",
// 						background: "#fff",
// 						borderRadius: "4px",
// 						overflow: "auto",
// 					},
// 					overlay: {
// 						backgroundColor: "rgba(0, 0, 0, 0.75)",
// 					},
// 				}}
// 			>
// 				{selectedShoe && (
// 					<div className={styles.openImage}>
// 						<div className={styles.openLeft}>
// 							<img
// 								src={selectedShoe.img}
// 								alt=""
// 								style={{ backgroundColor: selectedShoe.bg }}
// 							/>
// 							<div className={styles.opencontent}>
// 								<p>{selectedShoe.name || ""}</p>
// 								<p>{selectedShoe.color || ""}</p>
// 							</div>
// 						</div>
// 						<button onClick={closeModal}>
// 							<RxCross2 />
// 						</button>
// 					</div>
// 				)}
// 			</Modal>
// 		</div>
// 	)
// }

// export default FourProduct

import React, { useState } from "react"
import styles from "./fourProduct.module.css"
import { motion } from "framer-motion"
import Modal from "react-modal"
import { RxCross2 } from "react-icons/rx"

const FourProduct = ({ shoes, title }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [selectedShoe, setSelectedShoe] = useState(null)

	const openModal = (shoe) => {
		setSelectedShoe(shoe)
		setModalIsOpen(true)
	}

	const closeModal = () => {
		setModalIsOpen(false)
		setSelectedShoe(null)
	}

	return (
		<div className={styles.components}>
			<motion.h1
				initial={{ opacity: 0.5, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
				className={styles.shoes}
			>
				{title}
			</motion.h1>
			<div className={styles.shoeContainer}>
				{shoes.map((item, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0.5, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						className={styles.shoes}
						onClick={() => openModal(item)}
					>
						<img
							src={item.img}
							alt=""
							style={{ backgroundColor: item.color }}
						/>
						<div>
							<p>{item.name || ""}</p>
							<p>{item.bg || ""}</p>
						</div>
					</motion.div>
				))}
			</div>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Shoe Details"
				style={{
					content: {
						width: "80%",
						height: "auto",
						maxWidth: "900px",
						top: "55%",
						left: "50%",
						right: "auto",
						bottom: "auto",
						transform: "translate(-50%, -50%)",
						padding: "20px",
						background: "#fff",
						borderRadius: "4px",
						overflow: "auto",
					},
					overlay: {
						backgroundColor: "rgba(0, 0, 0, 0.75)",
					},
				}}
			>
				{selectedShoe && (
					<div className={styles.openImage}>
						<div className={styles.openLeft}>
							<img
								src={selectedShoe.img}
								alt=""
								style={{ backgroundColor: selectedShoe.bg }}
							/>
							<div className={styles.opencontent}>
								<p>{selectedShoe.name || ""}</p>
								<p>{selectedShoe.color || ""}</p>
							</div>
						</div>
						<button onClick={closeModal}>
							<RxCross2 />
						</button>
					</div>
				)}
			</Modal>
		</div>
	)
}

export default FourProduct
