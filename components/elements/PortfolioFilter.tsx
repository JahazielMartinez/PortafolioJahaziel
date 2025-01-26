'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter() {
	// Isotope
	const isotope = useRef<Isotope | null>(null)
	const [filterKey, setFilterKey] = useState<string>("*")

	useEffect(() => {
		const timeout = setTimeout(() => {
			isotope.current = new Isotope(".masonry-active", {
				itemSelector: ".filter-item",
				percentPosition: true,
				masonry: {
					columnWidth: ".filter-item",
				},
			})
		}, 1000)

		// Cleanup on unmount
		return () => clearTimeout(timeout)
	}, [])

	useEffect(() => {
		if (isotope.current) {
			isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` })
		}
	}, [filterKey])

	const handleFilterKeyChange = useCallback((key: string) => () => {
		setFilterKey(key)
	}, [])

	const activeBtn = (value: string) => (value === filterKey ? "active btn btn-md btn-filter mb-2 me-2 text-uppercase" : "btn btn-md btn-filter mb-2 me-2 text-uppercase")

	return (
		<>

			<div className="container">
				<div className="text-start">
					<div className="button-group filter-button-group filter-menu-active">
						<button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All Certificacions</button>
						<button className={activeBtn("brand")} onClick={handleFilterKeyChange("brand")}>UX/UI</button>
						<button className={activeBtn("webdesign")} onClick={handleFilterKeyChange("webdesign")}>Leadership</button>
						<button className={activeBtn("ui")} onClick={handleFilterKeyChange("ui")}>Marketing</button>
						<button className={activeBtn("app")} onClick={handleFilterKeyChange("app")}>English</button>
						<button className={activeBtn("network")} onClick={handleFilterKeyChange("network")}>Networks</button>
						<button className={activeBtn("network")} onClick={handleFilterKeyChange("video")}>Video</button>
					</div>
				</div>
				<div className="row masonry-active justify-content-between mt-6">
					<div className="grid-sizer" />
					<div className="filter-item col-lg-6 col-12 brand ui app">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link target="_blank" href="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Certificaciones%2FCrehana%2F2024%2F05.png?alt=media&token=74857165-a52e-47f4-889a-f2f4ab08649b">
								<img className="rounded-3 w-100 zoom-img" src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Certificaciones%2FCrehana%2F2024%2F05.png?alt=media&token=74857165-a52e-47f4-889a-f2f4ab08649b" alt="Crehana2024" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link target="_blank" href="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Certificaciones%2FCrehana%2F2024%2F05.png?alt=media&token=74857165-a52e-47f4-889a-f2f4ab08649b" className="project-card-content">
									<h3 className="fw-semibold">Emotional Intelligence Training</h3>
									<p>Introductory Level</p>
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 webdesign brand dataanalysis brand">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/work-single">
								<img className="rounded-3 w-100 zoom-img" src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Certificaciones%2FCrehana%2F2024%2F04.png?alt=media&token=fb8bcf9d-2d4b-4f1a-9deb-48202e0ae058" alt="infinia" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/work-single" className="project-card-content">
									<h3 className="fw-semibold">SEO Optimization</h3>
									<p>Intermediate Level</p>
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 ui app">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/work-single">
								<img className="rounded-3 w-100 zoom-img" src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Certificaciones%2FCrehana%2F2024%2F03.png?alt=media&token=2d0683e3-2c9c-43b1-9a7d-fd536ae7f3b8" alt="infinia" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/work-single" className="project-card-content">
									<h3 className="fw-semibold">SEO from Scratch: Positioning on Google</h3>
									<p>Introductory Level</p>
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 app app dataanalysis brand">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/work-single">
								<img className="rounded-3 w-100 zoom-img" src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Certificaciones%2FCrehana%2F2024%2F02.png?alt=media&token=ac03437a-f2df-4f8e-abd0-2fc97567264b" alt="infinia" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/work-single" className="project-card-content">
									<h3 className="fw-semibold">How to Inspire and Motivate to Achieve Higher Goals</h3>
									<p>Intermediate Level</p>
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 app app dataanalysis brand">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/work-single">
								<img className="rounded-3 w-100 zoom-img" src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Certificaciones%2FCrehana%2F2024%2F01.png?alt=media&token=dc14b8aa-260e-4501-a483-db47113a8062" alt="infinia" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/work-single" className="project-card-content">
									<h3 className="fw-semibold">Authenticity for Leaders</h3>
									<p>Introductory Level</p>
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 app app dataanalysis brand">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/work-single">
								<img className="rounded-3 w-100 zoom-img" src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Certificaciones%2FCrehana%2F2023%2F14.jpeg?alt=media&token=0601eac8-49ac-4ec5-98a5-a382f98fa079" alt="infinia" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/work-single" className="project-card-content">
									<h3 className="fw-semibold">Soft Skills for Teamwork</h3>
									<p>Intermediate Level</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}