'use client'
import Link from "next/link"
import CountUp from 'react-countup'
export default function Skills1() {
	return (
		<>

			<section className="section-skills-1 position-relative section-padding bg-900">
				<div className="container">
					<div className="row">
						<div className="text-center mb-7">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">Core Skills & Tools</h3>
							<span className="fs-5 fw-medium text-200">
								A combination of creativity and technical expertise.
							</span>
						</div>
						<div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-3 mb-7 px-6">
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/icon-1.png" alt="Figma" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={80} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Figma</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/icon-4.png" alt="Sketch" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={70} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Sketch</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/icon-3.png" alt="Adobe Suit" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={70} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Adobe</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/icon-2.png" alt="JIRA" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={70} />%</h3>
									<p className="text-400 fw-medium text-uppercase">JIRA</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/icon-6.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={70} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Git</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/icon-5.png" alt="G. Analytics" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={60} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Analytics</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/icon-7.png" alt="Amazon AWS" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={50} />%</h3>
									<p className="text-400 fw-medium text-uppercase">AWS</p>
								</div>
							</div>
						</div>
						<div className="text-center">
							<p className="fs-5 text-200 mb-0">In addition, I have expertise in integrating design with development, ensuring seamless collaboration between creative and technical teams. </p>
							<div className="d-flex justify-content-center gap-1">
								<Link href="/#" className="fs-5 fw-bold">Leadership,</Link>
								<Link href="/#" className="fs-5 fw-bold">UCD,</Link>
								<Link href="/#" className="fs-5 fw-bold">DesignThinking,</Link>
								<Link href="/#" className="fs-5 fw-bold">AtomicDesign,</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
