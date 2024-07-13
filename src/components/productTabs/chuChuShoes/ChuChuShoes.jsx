import React from "react"
import FourProduct from "../../productComponents/fourProduct/FourProduct"
import {
	fly15,
	fly16,
	flykids01,
	flykids02,
	flykids03,
	flykids04,
	flykids05,
	flykids06,
	flykids08,
	flykids09,
	flykids10,
	flykids11,
	flykids12,
	flykids13,
	fun,
	kingkong,
} from "../../../assets/assets"
import ThreeProduct from "../../productComponents/threeProduct/ThreeProduct"
import TwoProduct from "../../productComponents/twoProduct/TwoProduct"

const ChuChuShoes = () => {
	return (
		<div className="all-products-flex-gap">
			<FourProduct
				title={"Fly Kids-01"}
				shoes={flykids01}
			/>
			<FourProduct
				title={"Fly Kids-02"}
				shoes={flykids02}
			/>
			<FourProduct
				title={"Fly Kids-03"}
				shoes={flykids03}
			/>
			<FourProduct
				title={"Fly Kids-04"}
				shoes={flykids04}
			/>
			<FourProduct
				title={"Fly Kids-06"}
				shoes={flykids05}
			/>
			<FourProduct
				title={"Fly Kids-08"}
				shoes={flykids06}
			/>
			<FourProduct
				title={"Fly Kids-09"}
				shoes={flykids08}
			/>
			<FourProduct
				title={"Fly-10"}
				shoes={flykids09}
			/>
			<FourProduct
				title={"Fly-11"}
				shoes={flykids10}
			/>
			<FourProduct
				title={"Fly-12"}
				shoes={flykids11}
			/>
			<FourProduct
				title={"Fly-13"}
				shoes={flykids12}
			/>
			<FourProduct
				title={"Fly-14"}
				shoes={flykids13}
			/>
			<FourProduct
				title={"Fly-15"}
				shoes={fly15}
			/>{" "}
			<FourProduct
				title={"Fly-16"}
				shoes={fly16}
			/>{" "}
			<FourProduct
				title={"Fun"}
				shoes={fun}
			/>{" "}
			<FourProduct
				title={"King Kong"}
				shoes={kingkong}
			/>
		</div>
	)
}

export default ChuChuShoes
