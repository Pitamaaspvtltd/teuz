import React from "react"
import { supreme01, tokyo01 } from "../../../assets/assets"
import FourProduct from "../../productComponents/fourProduct/FourProduct"

const KidsSandals = () => {
	return (
		<div className="all-products-flex-gap">
			<FourProduct
				title={"Supreme-01"}
				shoes={supreme01}
			/>
			<FourProduct
				title={"Tokyo-01"}
				shoes={tokyo01}
			/>
		</div>
	)
}

export default KidsSandals
