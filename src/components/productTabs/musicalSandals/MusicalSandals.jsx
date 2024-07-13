import styles from "./musicalSandals.module.css"
import ThreeProduct from "../../productComponents/threeProduct/ThreeProduct"
import {
	candy01,
	candy02,
	champion01,
	champion02,
	champion03,
	champion04,
	champion05,
	love01,
	love02,
	love03,
	usa02,
	usa03,
	usa04,
} from "../../../assets/assets"
import FourProduct from "../../productComponents/fourProduct/FourProduct"
import DoubleProduct from "../../productComponents/doubleProduct/DoubleProduct"

const MusicalSandals = () => {
	return (
		<div className="all-products-flex-gap">
			<FourProduct
				title={"Candy-01"}
				shoes={candy01}
			/>
			<FourProduct
				title={"Candy-02"}
				shoes={candy02}
			/>
			<FourProduct
				title={"Champion-01"}
				shoes={champion01}
			/>
			<FourProduct
				title={"Champion-02"}
				shoes={champion02}
			/>
			<div className={styles.flex}>
				<FourProduct
					title={"Champion-03"}
					shoes={champion03}
				/>{" "}
				<FourProduct
					title={"Champion-05"}
					shoes={champion05}
				/>
			</div>
			<FourProduct
				title={"Champion-04"}
				shoes={champion04}
			/>
			<FourProduct
				title={"Love-01"}
				shoes={love01}
			/>
			<FourProduct
				title={"Love-02"}
				shoes={love02}
			/>
			<FourProduct
				title={"Love-03"}
				shoes={love03}
			/>
			<FourProduct
				title={"USA-02"}
				shoes={usa02}
			/>{" "}
			<FourProduct
				title={"USA-03"}
				shoes={usa03}
			/>{" "}
			<FourProduct
				title={"USA-04"}
				shoes={usa04}
			/>
		</div>
	)
}

export default MusicalSandals
