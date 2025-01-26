
import Link from "next/link"

export default function Service1() {
	return (
		<>

			<section className="section-service-1 pt-120 pb-120">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">What I Bring to Your Projects</h3>
							<span className="fs-5 fw-medium text-200">With a strong foundation in technology, design and leadership, I deliver customized solutions that elevate brands and improve user experiences.

							</span>
						</div>
						<div className="col-lg-auto">
							<Link href="/#contact" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								Get a Quote
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
					<div className="row mt-6 justify-content-between">
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Portafolio-imgs%2FPortadasStatic%2Fimg-technology.png?alt=media&token=c1986e65-f8ec-41be-ae4e-9dd99d7cce15">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<Link href="/work-single">
											<span className="service-number">01.</span>
											Technology & Dev.
										</Link>
									</h3>
									<Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Building scalable e-commerce platforms and responsive websites using React, NodeJS, and AWS. 
											<br /> Expertise in integrating ERP systems and optimizing workflows for business success.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Portafolio-imgs%2FPortadasStatic%2Fimg-UXUI.png?alt=media&token=b62c9def-84f5-4aa6-ad70-0fb7528d51db">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<Link href="/work-single">
											<span className="service-number">02.</span>
											UX/UI Design

										</Link>
									</h3>
									<Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Crafting user-focused designs with tools like Figma and Adobe XD. 
											<br /> Expertise in Mobile First and Atomic Design methodologies to deliver intuitive and engaging interfaces.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Portafolio-imgs%2FPortadasStatic%2Fimg-Projectmanagenmt.png?alt=media&token=71210b10-4324-4ce1-8d9f-3451b342e0e0">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<Link href="/work-single">
											<span className="service-number">03.</span>
											Project Management
										</Link>
									</h3>
									<Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Driving success with Agile methodologies, JIRA, and Trello. 
											<br />Experienced in leading cross-functional teams to align technology with business goals.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3 border-bottom" data-fx={1} data-img="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Portafolio-imgs%2FPortadasStatic%2Fimg-leadership.png?alt=media&token=a988233a-2296-4134-aee1-bd429563e082">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<Link href="/work-single">
											<span className="service-number">04.</span>
											Leadership
										</Link>
									</h3>
									<Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											I inspire and guide cross-functional teams to achieve strategic goals. I focus on unlocking each individual's potential, fostering a culture of collaboration, innovation, and commitment to deliver exceptional results.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
