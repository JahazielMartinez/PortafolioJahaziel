'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"



const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	// spaceBetween: 20,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		// EDITAR Velocidad
		delay: 4000,
	},
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
}

export default function Projects2() {
	return (
		<>

			<div className="section-projects-2 pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Featured Works </span>
								</div>
								<h3>Where Creativity Meets Functionality</h3>
								<div className="position-relative">
									<Swiper {...swiperOptions} className="swiper slider-two pb-3 position-relative">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
													<div className="row">
														<div className="col-lg-5">
															<img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Portafolio-imgs%2FCasos%20cl%C3%ADnicos%2Fimg-Renoshop.mx.png?alt=media&token=01055e65-979a-4c6b-b274-af12af966242" alt="RenoCapital" />
														</div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
																Reno Capital - CTO & UX Manager
															</h4>
															<p>As CTO and UX Manager, I established and led the IT department at Reno Capital, spearheading the development of a robust e-commerce platform and an internal ERP system to streamline operations across multiple departments.</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Client</p>
																		<p className="text-300 mb-0 text-end">Reno Capital S.A. de C.V.</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Completion Time</p>
																		<p className="text-300 mb-0 text-end">2 year</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Technologies</p>
																		<p className="text-300 mb-0 text-end">AWS, Design Thinking, Atomic Desig, Figma, (UCD), APIs, Git/GitHub, Scrum, Analytics, Hotjar, Jira, Leadership, Team Mentorship, Prototyping, Workflow.</p>
																	</div>
																</li>
															</ul>
															<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																<Link href="https://www.renoshop.mx/es" target='_blank' className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	Live Demo
																</Link>
																<Link href="#" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	View on Figma
																</Link>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
													<div className="row">
														<div className="col-lg-5">
															<img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Portafolio-imgs%2FCasos%20cl%C3%ADnicos%2Fimg-Laleo.png?alt=media&token=79f69389-44cf-4b4a-b766-0658a61f2848" alt="LALEO" />
														</div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
																Redesign and Optimization of LALEO's E-commerce System
																<br />
															</h4>
															<p>Led the complete redesign and optimization of LALEO’s e-commerce platform and ERP system. Integrated advanced UX/UI methodologies to enhance user experience and streamline internal workflows, ensuring scalable and efficient solutions for the entire company.</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Client</p>
																		<p className="text-300 mb-0 text-end">LALEO - J.P. Oklever Edition Books</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Completion Time</p>
																		<p className="text-300 mb-0 text-end">2 years</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Technologies</p>
																		<p className="text-300 mb-0 text-end">Figma, DesignThnking, UCD, Scrum, AtomicDesign, Miro, HotJar, Google Analytics, Mobile First, Interactive Prototypes</p>
																	</div>
																</li>
															</ul>
															<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																<Link href="https://laleo.com/" target='_blank' className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	Live Demo
																</Link>
																<Link href="" target='_blank' className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	View on Figma
																</Link>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
													<div className="row">
														<div className="col-lg-5">
															<img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Portafolio-imgs%2FCasos%20cl%C3%ADnicos%2Fimg-casosclinicos.png?alt=media&token=33bbb29b-9af3-46ac-99d6-23c1ef10bc7b" alt="Leonora AI" />
														</div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
																Leonora - Clinical Case Management System with AI
															</h4>
															<p>Led the design and development of a platform enabling students and medical professionals to create and manage clinical cases using AI. Designed an intuitive admin panel for moderating cases and comments, while ensuring a seamless user experience through deep UX research and collaborative teamwork.</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Client</p>
																		<p className="text-300 mb-0 text-end">LALEO - J.P. Oklever Edition Books</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Completion Time</p>
																		<p className="text-300 mb-0 text-end">6 months</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Technologies</p>
																		<p className="text-300 mb-0 text-end">Usability Testing, Personas, User Personas, Journey Mapping, Card Sorting, Figma, Atomic Design, Prototypes, OpenAI</p>
																	</div>
																</li>
															</ul>
															<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																<Link href="https://leonora.ai/" target='_blank' className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	Live Demo
																</Link>
																<Link href="#" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	View on Figma
																</Link>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
													<div className="row">
														<div className="col-lg-5">
															<img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Portafolio-imgs%2FCasos%20cl%C3%ADnicos%2Fimg-OnPointMX.png?alt=media&token=1df09045-db6c-4551-953a-9d7f8ff78263" alt="OnPoint" />
														</div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
																Custom Printing Solutions Website
															</h4>
															<p>I designed and developed the OnPointCR website, a platform specializing in personalized printing services for promotional items. The site showcases various services, including merchandise customization, corporate gifts, and event-exclusive products. It also details the printing techniques employed, such as screen printing, pad printing, laser engraving, DTF textile/UV printing, and embroidery.</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Client</p>
																		<p className="text-300 mb-0 text-end">OnOpointCR S.A. de C.V.</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Completion Time</p>
																		<p className="text-300 mb-0 text-end">4 months</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Technologies</p>
																		<p className="text-300 mb-0 text-end"> HTML5, CSS3, JS, Figma, UI/UX design</p>
																	</div>
																</li>
															</ul>
															<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																<Link href="https://onpointcr.mx/" target='_blank' className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	Live Demo
																</Link>
																<Link href="#" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	View on Figma
																</Link>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
									<div className="position-absolute bottom-0 end-0 gap-2 pb-7 pe-5 d-none d-md-flex">
										<div className="swiper-button-prev end-0 shadow position-relative">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="white" />
											</svg>
										</div>
										<div className="swiper-button-next end-0 shadow position-relative">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#A8FF53" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/projects/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
