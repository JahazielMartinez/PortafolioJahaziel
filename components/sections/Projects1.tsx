
import Link from "next/link"
import dynamic from 'next/dynamic'
const PortfolioFilter = dynamic(() => import('../elements/PortfolioFilter'), {
	ssr: false,
})

export default function Projects1() {
	return (
		<>

			<div id="projects" className="section-projects-1 position-relative pt-120 pb-6 bg-900">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-12 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">What I’ve Accomplished</h3>
							<span className="fs-5 fw-medium text-200">
								A collection of certifications that showcase my commitment to continuous learning and expertise in technology, design, and leadership.
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-900 fillter-project" data-background="assets/imgs/projects/projects-1/background.png">
				<PortfolioFilter />
			</div>
			<div className="contairer overflow-hidden">
				<div className="row justify-content-center position-relative button-project pb-160 bg-900 pt-1">
					<Link href="/certifications" className="icon_hover position-relative z-1 icon-shape icon_150 border-linear-2 rounded-circle position-relative overflow-hidden bg-white hover-up">
						<span className="icon-shape icon-md bg-linear-2 rounded-circle position-absolute bottom-0 end-0" />
						<p className="m-0 fs-7 fw-bold text-capitalize position-absolute top-50 start-50 translate-middle">
							View All
							<i className="ri-arrow-right-up-line fs-7" />
						</p>
					</Link>
					<div className="ellipse position-absolute bottom-0 start-50 translate-middle-x z-0" />
				</div>
			</div>

		</>
	)
}
