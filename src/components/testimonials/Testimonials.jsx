import styles from "./testimonials.module.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
// import "swiper/css/navigation"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

const testimonials = [
	{
		title: "Reliable and High-Quality",
		desc: "Teuz provides high-quality sandals and school shoes that are our best sellers. Their reliable supply chain keeps us well-stocked.",
		author: "KidsKicks Warehouse",
	},
	{
		title: "Reliable and High-Quality",
		desc: "Teuz provides high-quality sandals and school shoes that are our best sellers. Their reliable supply chain keeps us well-stocked.",
		author: "KidsKicks Warehouse",
	},
	{
		title: "Reliable and High-Quality",
		desc: "Teuz provides high-quality sandals and school shoes that are our best sellers. Their reliable supply chain keeps us well-stocked.",
		author: "KidsKicks Warehouse",
	},
]

const Testimonials = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>TESTIMONIALS</h1>

			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				// centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				breakpoints={{
					300: { slidesPerView: 1, spaceBetween: 30 },
					768: {
						slidesPerView: 1,
						spaceBetween: 30,
					},
					1150: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className={styles.testimonials}>
						<div>
							<h2>Reliable and High-Quality</h2>
							<p>
								Teuz provides high-quality sandals and school shoes that are our
								best sellers. Their reliable supply chain keeps us well-stocked.
							</p>
						</div>
						<h1>KidsKicks Warehouse</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.testimonials}>
						<div>
							<h2>Reliable and High-Quality</h2>
							<p>
								Teuz provides high-quality sandals and school shoes that are our
								best sellers. Their reliable supply chain keeps us well-stocked.
							</p>
						</div>
						<h1>KidsKicks Warehouse</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.testimonials}>
						<div>
							<h2>Reliable and High-Quality</h2>
							<p>
								Teuz provides high-quality sandals and school shoes that are our
								best sellers. Their reliable supply chain keeps us well-stocked.
							</p>
						</div>
						<h1>KidsKicks Warehouse</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.testimonials}>
						<div>
							<h2>Reliable and High-Quality</h2>
							<p>
								Teuz provides high-quality sandals and school shoes that are our
								best sellers. Their reliable supply chain keeps us well-stocked.
							</p>
						</div>
						<h1>KidsKicks Warehouse</h1>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Testimonials
