import Link from 'next/link'
import Marquee from 'react-fast-marquee'


export default function Skills2() {
	return (
		<>
			<section id="skills" className="section-skills-2 pt-4 col-lg-12">
				<div className="rounded-3 bg-3 border border-1 position-relative overflow-hidden">
					<div className="position-relative z-1 py-60">
						<div className="position-relative z-1">
							<div className="text-center">
								<div className="d-flex align-items-center justify-content-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Highlights </span>
								</div>
								<h3>My Skills</h3>
							</div>
							<div className="container mt-8">
								<div className="row">
									<div className="col-lg-6">
										<div className="row">
											<div className="col-lg-10 col-md-9 mx-auto overflow-hidden">
												{/* Carausel Scroll Right*/}
												<Marquee className="carouselTicker carouselTicker-right position-relative z-1" direction="right">
													<ul className="carouselTicker__list m-0">
														<li className="carouselTicker__item mt-6">
															<Link href="http://figma.com/" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F1.%20UX-UI%2F1.%20Figma.svg?alt=media&token=dc0ca9f5-0b43-4b78-80ff-7016da6e3e18" alt="Figma" />
															</Link>
															<span className="tool-tip">Figma</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://adobexdplatform.com/" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F1.%20UX-UI%2F2%20AdobeXD.svg?alt=media&token=c66d32ad-9dc5-465e-8605-00bda6309b0a" alt="Adobe XD" />
															</Link>
															<span className="tool-tip">Adobe XD</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://www.sketch.com/" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F1.%20UX-UI%2F3.%20Sketch.svg?alt=media&token=7f088b63-ed4a-42e0-afb1-611c8c5b91ff" alt="Sketch" />
															</Link>
															<span className="tool-tip">Sketch</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://www.framer.com/" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F1.%20UX-UI%2F4.%20Framer.svg?alt=media&token=26ee640e-f63c-4292-adfc-ee4ccd309525" alt="Framer" />
															</Link>
															<span className="tool-tip">Framer</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://www.hotjar.com/" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F4.%20Others%2F4.%20Hotjar.svg?alt=media&token=a40c0633-e938-4641-9891-b007d29cdadf" alt="brand" />
															</Link>
															<span className="tool-tip">Hotjar</span>
														</li>
													</ul>
												</Marquee>
											</div>
											<div className="col-lg-8 col-md-7 col-10 mx-auto overflow-hidden">
												{/* Carausel Scroll Left*/}
												<Marquee className="carouselTicker carouselTicker-left position-relative z-2">
													<ul className="carouselTicker__list m-0 ">
														<li className="carouselTicker__item mt-6">
															<Link href="https://html.spec.whatwg.org/" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F2.%20IT%26Develoment%2F1.%20HTML.svg?alt=media&token=6d53d2af-4988-4764-b90d-23bf49799798" alt="HTML5" />
															</Link>
															<span className="tool-tip">HTML5</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://www.w3.org/Style/CSS/" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F2.%20IT%26Develoment%2F2.%20CSS.svg?alt=media&token=b0d8d51b-df3b-442d-becb-1e36e8f4258e" alt="CSS3" />
															</Link>
															<span className="tool-tip">CSS3</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F2.%20IT%26Develoment%2F3.%20JS.svg?alt=media&token=6974713c-5590-4ea9-9fc6-10508b7c749e" alt="JS" />
															</Link>
															<span className="tool-tip">JS</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://reactjs.org/" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F2.%20IT%26Develoment%2F4.%20React.svg?alt=media&token=2e2b057e-de8e-4e41-9ccd-34771bd23752" alt="ReactJS" />
															</Link>
															<span className="tool-tip">React</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://nextjs.org/" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F2.%20IT%26Develoment%2F5.%20Nextjs.svg?alt=media&token=2d9b74d2-8794-4e17-b1b5-fdee72cbbe18" alt="ReactJS" />
															</Link>
															<span className="tool-tip">NextJS</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://aws.amazon.com/" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F2.%20IT%26Develoment%2F6.%20AWS.svg?alt=media&token=82c26514-4afa-4d9b-a6b9-001a97b51e88" alt="ReactJS" />
															</Link>
															<span className="tool-tip">AWS</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://git-scm.com/" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F2.%20IT%26Develoment%2F7.%20Git.svg?alt=media&token=bdbf9955-9641-4482-8585-329a940d350e" alt="ReactJS" />
															</Link>
															<span className="tool-tip">Git</span>
														</li>
													</ul>
												</Marquee>
											</div>
											<div className="col-lg-10 col-md-9 mx-auto overflow-hidden">
												{/* Carausel Scroll Right*/}
												<Marquee className="carouselTicker carouselTicker-right position-relative z-1" direction="right">
													<ul className="carouselTicker__list m-0">
														<li className="carouselTicker__item mt-6">
															<Link href="https://www.atlassian.com/software/jira" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F3.%20Leadership%2F1.%20Jira.svg?alt=media&token=f086452d-b004-43e9-bd98-d5825e13aaa8" alt="Jira" />
															</Link>
															<span className="tool-tip">Jira</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://trello.com/" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F3.%20Leadership%2F2.%20Trello.svg?alt=media&token=d6dcf25b-e1dc-411a-8ca6-f19ca7c7f9c2" alt="Trello" />
															</Link>
															<span className="tool-tip">Trello</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://asana.com/" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F3.%20Leadership%2F3.%20Asana.svg?alt=media&token=a4f07a8a-48a5-48ee-971c-a8910425bcc9" alt="Asana" />
															</Link>
															<span className="tool-tip">Asana</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://miro.com/" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F3.%20Leadership%2F4.%20Miro.svg?alt=media&token=ee87ebc9-d2e9-4e7a-9eb4-0f412b333391" alt="Miro" />
															</Link>
															<span className="tool-tip">Miro</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://www.notion.so/" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F3.%20Leadership%2F5.%20Notion.svg?alt=media&token=e8945afe-f4b6-4398-a7a0-4b756f3e5c3d" alt="Notion" />
															</Link>
															<span className="tool-tip">Notion</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://slack.com/" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F3.%20Leadership%2F6.%20Slack.svg?alt=media&token=19e85225-afe8-4dcf-940f-6fd770a332dd" alt="Slack" />
															</Link>
															<span className="tool-tip">Slack</span>
														</li>
													</ul>
												</Marquee>
											</div>
											<div className="col-lg-8 col-md-7 col-10 mx-auto overflow-hidden">
												{/* Carausel Scroll Left*/}
												<Marquee className="carouselTicker carouselTicker-left position-relative z-2">
													<ul className="carouselTicker__list m-0 ">
														<li className="carouselTicker__item mt-6">
															<Link href="https://marketingplatform.google.com/about/analytics/" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F4.%20Others%2F1.%20GoogleAnalytics.svg?alt=media&token=b488554a-8584-40aa-82c3-eee9ef79d1b1" alt="brand" />
															</Link>
															<span className="tool-tip">Google Analytics</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://www.adobe.com/products/premiere.html" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F4.%20Others%2F2.%20Premiere%20Pro.svg?alt=media&token=9310e230-244b-4d61-9bb8-756ff74e1f4c" alt="brand" />
															</Link>
															<span className="tool-tip">Premire Pro</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://www.adobe.com/products/aftereffects.html" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F4.%20Others%2F3.%20AfterEffects.svg?alt=media&token=6e2ba29f-322c-4246-b181-9c9205a40ee0" alt="brand" />
															</Link>
															<span className="tool-tip">AfterEffects</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://www.adobe.com/products/photoshop.html" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F4.%20Others%2F5.%20Photoshop.svg?alt=media&token=36a61bbb-8590-4711-b119-63b7ca668dd3" alt="brand" />
															</Link>
															<span className="tool-tip">Photoshop</span>
														</li>
														<li className="carouselTicker__item mt-6">
															<Link href="https://www.adobe.com/products/illustrator.html" target='_blank' className="brand-logo icon_80 icon-shape rounded-3">
																<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/BrandsPortafolio%2F4.%20Others%2F6.%20Illustrator.svg?alt=media&token=68a87c14-aa8e-4254-ba26-0bb0d82cef0a" alt="brand" />
															</Link>
															<span className="tool-tip">Illustrator</span>
														</li>
													</ul>
												</Marquee>
											</div>
										</div>
									</div>
									<div className="col-lg-6 border-start-md mt-lg-0 mt-5">
										<div className="row">
											<div className="col-md-10 mx-auto">
												<div className="h-100 position-relative">
													<ul className="ps-3 d-flex flex-column justify-content-between h-100 position-relative">
														<li className="mb-4">
															<div className="d-flex flex-column flex-md-row gap-2">
																<p className="text-dark text-nowrap mb-2">UX/UI Design</p>
															</div>
															<ul>
																<li className='mb-1'><span className="text-300">Figma, Adobe XD, Sketch, Framer, Prototyping Tools, Journey Mapping </span></li>
																<li className='mb-1'><span className="text-300">Interviews, Prototyping, Wireframing, User Flows, Personas, Usability Testing</span></li>
																<li className='mb-1'><span className="text-300">AtomicDesign, DesignThinking, UCD, A/B Testing</span></li>
															</ul>
														</li>
														<li className="mb-4">
															<div className="d-flex flex-column flex-md-row gap-2">
																<p className="text-dark text-nowrap mb-2">IT & Development:</p>
															</div>
															<ul>
																<li className='mb-1'><span className="text-300">HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, AWS, Netlify </span></li>
																<li className='mb-1'><span className="text-300">Git, GitHub, Responsive Design, CI/CD, Google Cloud Platform</span></li>
																<li className='mb-1'><span className="text-300">Scrum/Kanban</span></li>
															</ul>
														</li>
														<li className="mb-4">
															<div className="d-flex flex-column flex-md-row gap-2">
																<p className="text-dark text-nowrap mb-2">Leadership:</p>
															</div>
															<ul>
																<li className='mb-1'><span className="text-300">Jira, Trello, Asana, Miro, Notion, Slack</span></li>
																<li className='mb-1'><span className="text-300">OKRs, KPIs, Building rapport, SMART goals</span></li>
																<li className='mb-1'><span className="text-300">360 Feedback Surveys, Pulse Surveys, Team Building</span></li>
															</ul>
														</li>
														<li className="mb-4">
															<div className="d-flex flex-column flex-md-row gap-2">
																<p className="text-dark text-nowrap mb-2">Automation &amp; Technology</p>
															</div>
																<ul>
																	<li className='mb-1'><span className="text-300">ERP Systems, Google Analytics, Hotjar, Google Tag</span></li>
																	<li className='mb-1'><span className="text-300">Identifying and Automating Manual Processes, Integration of Complex Systems</span></li>
																	<li className='mb-1'><span className="text-300">Process Mapping, Iterative Development, End-to-End Project Management</span></li>
																</ul>
														</li>
														<li className="mb-4">
															<div className="d-flex flex-column flex-md-row gap-2">
																<p className="text-dark text-nowrap mb-2">Others:</p>
																<span className="text-300">Premiere Pro, After Effects, Photoshop, Illustrator, Storytelling</span>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="position-absolute d-none d-md-block decorate">
						<div className="rotateme">
							<div className="circle-1-1" />
							<div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
								<svg className="mb-5 position-absolute bottom-0 start-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
									<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
								</svg>
							</div>
							<div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
								<svg className="mb-3 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
									<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
