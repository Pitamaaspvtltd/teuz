import styles from "./lightSandals.module.css"
import ThreeProduct from "../../productComponents/threeProduct/ThreeProduct"
import {
	disco01,
	disco02,
	glitter01,
	glitter1,
	led01,
} from "../../../assets/assets"
import FourProduct from "../../productComponents/fourProduct/FourProduct"
import DoubleProduct from "../../productComponents/doubleProduct/DoubleProduct"

const LightSandals = () => {
	return (
		<div className="all-products-flex-gap">
			<FourProduct
				title={"Glitter-01"}
				shoes={glitter01}
			/>
			<FourProduct
				title={"LED-01"}
				shoes={led01}
			/>
			<div className={styles.flex}>
				<FourProduct
					title={"Disco-01"}
					shoes={disco01}
				/>
				<FourProduct
					title={"Disco-02"}
					shoes={disco02}
				/>
			</div>
			<FourProduct
				title={"Glitter-01"}
				shoes={glitter1}
			/>
		</div>
	)
}

export default LightSandals
