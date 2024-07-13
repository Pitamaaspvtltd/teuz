import {
	army01,
	girlClub,
	glow01,
	glow02,
	glow03,
	nora01,
	refale,
	refale101,
	teuzgola,
} from "../../../assets/assets"
import DoubleProduct from "../../productComponents/doubleProduct/DoubleProduct"
import FourProduct from "../../productComponents/fourProduct/FourProduct"
import OneProduct from "../../productComponents/oneProduct/OneProduct"
import ThreeProduct from "../../productComponents/threeProduct/ThreeProduct"
import styles from "./girlsBoysCollection.module.css"
const GirlsBoysCollection = () => {
	return (
		<div className="all-products-flex-gap">
			{/* <div className={styles.flexcontainer}>
				<OneProduct
					title={"Girl Club"}
					shoes={girlClub}
				/>
				<OneProduct
					title={"Refale-101"}
					shoes={refale101}
				/>
			</div>
			<div className={styles.flexcontainer1}>
				<OneProduct
					title={"Army-01"}
					shoes={army01}
				/>
				<OneProduct
					title={"Teuz Gola"}
					shoes={teuzgola}
				/>
			</div>
			<FourProduct
				title={"Glow-01"}
				shoes={glow01}
			/>
			<ThreeProduct
				title={"Glow-02"}
				shoes={glow02}
			/>
			<ThreeProduct
				title={"Glow-03"}
				shoes={glow03}
			/>
			<ThreeProduct
				title={"Nora-01"}
				shoes={nora01}
			/>
			<FourProduct
				title={"Refale"}
				shoes={refale}
			/> */}

			<div className={styles.flexcontainer}>
				<FourProduct
					title={"Girl Club"}
					shoes={girlClub}
				/>
				<FourProduct
					title={"Refale-101"}
					shoes={refale101}
				/>
			</div>
			<div className={styles.flexcontainer1}>
				<FourProduct
					title={"Army-01"}
					shoes={army01}
				/>
				<FourProduct
					title={"Teuz Gola"}
					shoes={teuzgola}
				/>
			</div>
			<FourProduct
				title={"Glow-01"}
				shoes={glow01}
			/>
			<FourProduct
				title={"Glow-02"}
				shoes={glow02}
			/>
			<FourProduct
				title={"Glow-03"}
				shoes={glow03}
			/>
			<FourProduct
				title={"Nora-01"}
				shoes={nora01}
			/>
			<FourProduct
				title={"Refale"}
				shoes={refale}
			/>
		</div>
	)
}

export default GirlsBoysCollection
