
import Link from "next/link"

export default function Resume1() {
	return (
		<>

			<section id="resume" className="section-resume-1 position-relative pt-150 overflow-hidden" data-background="assets/imgs/projects/projects-1/background.png">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">My Professional Journey</h3>
							<span className="fs-5 fw-medium text-200">
								Focused on growth, innovation, and creating meaningful results.
							</span>
						</div>
						<div className="col-lg-auto">
							<Link href="/#contact" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								Get in touch
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
					<div className="row mt-6">
						<div className="col-lg-6 col-12">
							<div className="resume-card p-lg-6 p-4 mb-lg-0 mb-6">
								<div className="resume-card-header d-flex align-items-end">
									<img className="border-linear-1 border-3 pb-2 pe-2" src="/assets/imgs/resume/resume-1/icon-1.svg" alt="" />
									<h3 className="fw-semibold mb-0 border-bottom border-600 border-3 pb-2 w-100">Education</h3>
								</div>
								<div className="resume-card-body">
									<div className="resume-card-item px-4 py-3 mt-5">
										<div className="d-flex align-items-end">
											<div>
												<p className="fw-extra-bold text-linear-1 mb-2">2018-2019</p>
												<h5>CISCO CCNA 200-125</h5>
												<p className="text-300 mb-0">Capa8 CDMX</p>
											</div>
										</div>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<div className="d-flex align-items-end">
											<div>
												<p className="fw-extra-bold text-linear-1 mb-2">2017-2022</p>
												<h5>Bachelor's Degree in Computer Engineering</h5>
												<p className="text-300 mb-0">National Autonomous University of Mexico (UNAM)</p>
											</div>
										</div>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<div className="d-flex align-items-end">
											<div>
												<p className="fw-extra-bold text-linear-1 mb-2">2015 - 2017</p>
												<h5>Technical Degree in Computer Science</h5>
												<p className="text-300 mb-0">CCH Azcapotzalco, UNAM</p>
											</div>
										</div>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<div className="d-flex align-items-end">
											<div>
												<p className="fw-extra-bold text-linear-1 mb-2">2012-2013</p>
												<h5>Certification in Graphic Design</h5>
												<p className="text-300 mb-0">Coursera</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-12">
							<div className="resume-card p-lg-6 p-4 h-100">
								<div className="resume-card-header d-flex align-items-end">
									<img className="border-linear-1 border-3 pb-2 pe-2" src="/assets/imgs/resume/resume-1/icon-2.svg" alt="" />
									<h3 className="fw-semibold mb-0 border-bottom border-600 border-3 pb-2 w-100">Experience</h3>
								</div>
								<div className="resume-card-body">
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">October 2024 - Present</p>
										<h5>DevModeMerch S.A.P.I. de C.V.</h5>
										<p className="text-300 mb-0">Founder & Chief Technology Officer (CTO)</p>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">June 2023 - September 2024</p>
										<h5>Reno Capital S.A. de C.V.</h5>
										<p className="text-300 mb-0">Chief Technology Officer (CTO) & UX Manager</p>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">August 2021 - June 2023</p>
										<h5>LALEO - J.P. Oklever Edition Books</h5>
										<p className="text-300 mb-0">UX/UI Team Leader</p>
									</div>
									<div className="resume-card-item px-4 py-3 mt-4">
										<p className="fw-extra-bold text-linear-1 mb-2">February 2019 - November 2021</p>
										<h5>Ministerios La Hermosa</h5>
										<p className="text-300 mb-0">Multimedia/Dev Team Leader</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="scroll-move-right position-relative pb-160 pt-lg-150">
					<div className="d-flex align-items-center gap-5 wow img-custom-anim-top position-absolute top-50 start-50 translate-middle">
						<h3 className="stroke fs-150 text-uppercase text-white">JavaScript . NextJS	. Tailnwind</h3>
					</div>
				</div>
			</section>

		</>
	)
}
