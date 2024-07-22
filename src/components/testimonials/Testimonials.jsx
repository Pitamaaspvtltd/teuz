import styles from "./testimonials.module.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
// import "swiper/css/navigation"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import { assets } from "../../assets/assets"

const testimonials = [
	{
		title: "The Coolest Shoes Ever!",
		desc: "I love my Teuz shoes because they make sounds when I walk. It's like I'm making music everywhere I go! All my friends want a pair too.",
		author: "Aarav",
		img: assets.reviewChild1,
	},
	{
		title: "Super Comfortable for School!",
		desc: "My shoes from Teuz are so comfy! I can run and play without my feet hurting. Plus, they look really smart with my uniform.",
		author: "Meera",
		img: assets.reviewChild2,
	},
	{
		title: "Perfect for Playing Outside!",
		desc: "My Teuz sandals are the best for playing outside. They are really light and don’t make my feet sweaty. I wear them all the time!",
		author: "Rohan",
		img: assets.reviewChild3,
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
					900: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1290: {
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
				{testimonials.map((item, index) => (
					<SwiperSlide className={styles.gapbetween}>
						<div className={styles.testimonials}>
							<img
								src={item.img}
								alt=""
							/>
							<div className={styles.content}>
								<h2>{item.title}</h2>
								<p>{item.desc}</p>
								<h1>{item.author}</h1>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Testimonials
