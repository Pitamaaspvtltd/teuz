import styles from "./puSandals.module.css"
import FourProduct from "../../productComponents/fourProduct/FourProduct"
import {
	frozen01,
	jony15,
	jony162,
	jony164,
	jony165,
	jony166,
	jony167,
	jony23,
	jony26,
	jony27,
	pari01,
	pari02,
	pari05,
	pari06,
	princess01,
	princess02,
	princess03,
	sweety01,
	sweety02,
	sweety03,
	target01,
} from "../../../assets/assets"
import ThreeProduct from "../../productComponents/threeProduct/ThreeProduct"
import OneProduct from "../../productComponents/oneProduct/OneProduct"
import DoubleProduct from "../../productComponents/doubleProduct/DoubleProduct"

const PuSandals = () => {
	return (
		<div className="all-products-flex-gap">
			<FourProduct
				title={"Jony-15"}
				shoes={jony15}
			/>
			<FourProduct
				title={"Jony-23"}
				shoes={jony23}
			/>
			<div className={styles.flex1}>
				<FourProduct
					title={"Jony-26"}
					shoes={jony26}
				/>{" "}
				<FourProduct
					title={"Jony-27"}
					shoes={jony27}
				/>
			</div>
			<FourProduct
				title={"Jony-162"}
				shoes={jony162}
			/>
			<FourProduct
				title={"Jony-164"}
				shoes={jony164}
			/>{" "}
			<FourProduct
				title={"Jony-165"}
				shoes={jony165}
			/>
			<div className={styles.flex1}>
				<FourProduct
					title={"Jony-166"}
					shoes={jony166}
				/>{" "}
				<FourProduct
					title={"Frozen-01"}
					shoes={frozen01}
				/>
			</div>
			<FourProduct
				title={"Jony-167"}
				shoes={jony167}
			/>
			<FourProduct
				title={"Target-01"}
				shoes={target01}
			/>{" "}
			<FourProduct
				title={"Pari-01"}
				shoes={pari01}
			/>{" "}
			<FourProduct
				title={"Pari-02"}
				shoes={pari02}
			/>
			<FourProduct
				title={"Pari-05"}
				shoes={pari05}
			/>{" "}
			<FourProduct
				title={"Pari-06"}
				shoes={pari06}
			/>{" "}
			<div className={styles.flex2}>
				<FourProduct
					title={"Princess-01"}
					shoes={princess01}
				/>
				<FourProduct
					title={"Princess-02"}
					shoes={princess02}
				/>
				<FourProduct
					title={"Princess-03"}
					shoes={princess03}
				/>
			</div>
			<FourProduct
				title={"Sweety-01"}
				shoes={sweety01}
			/>{" "}
			<FourProduct
				title={"Sweety-02"}
				shoes={sweety02}
			/>{" "}
			<FourProduct
				title={"Sweety-03"}
				shoes={sweety03}
			/>{" "}
		</div>
	)
}

export default PuSandals
