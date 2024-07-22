import { assets } from "../../assets/assets"
import styles from "./contact.module.css"
import { motion } from "framer-motion"
const Contact = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<motion.img
					initial={{ scale: 1.3 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.5 }}
					src={assets.contactBg}
					alt="background shoes Image"
				/>
			</header>
			<main>
				<div className={styles.contact}>
					<motion.div
						initial={{ opacity: 0, x: -60 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4 }}
						className={styles.leftContact}
					>
						<h2>CONNECT WITH</h2>
						<h1>OUR TEAM</h1>
					</motion.div>
					<div className={styles.rightContact}>
						<form className={styles.form}>
							<div className={styles.row}>
								<div className={styles.col}>
									<input
										type="text"
										name="firstName"
										placeholder="First Name"
									/>
								</div>
								<div className={styles.col}>
									<input
										type="text"
										name="lastName"
										placeholder="Last Name"
									/>
								</div>
							</div>
							<div className={styles.row}>
								<input
									type="text"
									name="companyName"
									placeholder="Company Name"
								/>
							</div>
							<div className={styles.row}>
								<input
									type="tel"
									name="phone"
									placeholder="Phone No"
								/>
							</div>
							<div className={styles.row}>
								<input
									type="email"
									name="email"
									placeholder="Email Address"
								/>
							</div>
							<div className={styles.row}>
								<input
									name="enquiry"
									placeholder="Write your enquiry"
								/>
							</div>
							<div className={styles.row}>
								<button type="submit">SEND</button>
							</div>
						</form>
					</div>
				</div>
				<div className={styles.details}>
					<ul className={styles.contactList}>
						<motion.li
							initial={{ opacity: 0, x: -60 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4 }}
						>
							<span>Address</span>
							<address>969,M.I.E. Part A, Bahadurgarh-124507 Haryana</address>
						</motion.li>
						<motion.li
							initial={{ opacity: 0, x: -60 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4 }}
							className={styles.contactNo}
						>
							<span>Contact</span>
							<a href="tel:+919891565755">+91 9891565755</a>
							<a href="tel:+919811155339">+91 9811155339</a>
							<a href="tel:+919350233544">+91 9350233544</a>
						</motion.li>
						<motion.li
							initial={{ opacity: 0, x: -60 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4 }}
							className={styles.email}
						>
							<span>Mail</span>
							<a href="mailto:teuzfootwearindustries2022@gmail.com">
								teuzfootwearindustries <br /> 2022@gmail.com
							</a>
						</motion.li>
					</ul>
				</div>
				<div className={styles.iframe}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3499.9388799953085!2d76.95736867550299!3d28.69147487563258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQxJzI5LjMiTiA3NsKwNTcnMzUuOCJF!5e0!3m2!1sen!2sin!4v1720515390399!5m2!1sen!2sin"
						style={{ border: 0 }}
						allowFullScreen={true}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</main>
		</div>
	)
}

export default Contact
