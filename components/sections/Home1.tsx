
import Link from "next/link"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home1() {
	return (
		<>

			<section className="section-hero-1 position-relative pt-200 pb-120 overflow-hidden">
				<div className="container position-relative z-3">
					<div className="row justify-content-center">
						<div className="col-lg-12 col-md-12 justify-content-center">
							<span className="text-dark">👋 Hi there, I’m Jahaziel 👨‍💻 Building Scalable & Intuitive Tech Solutions</span>
							<h1 className="ds-2 mb-3"> Full Stack / Software Architecture <br /><span className="text-primary-1">/ UX-UI & IT Leadership</span></h1>
							<p className="text-300 mb-6">Keeping innovation, usability, and performance at the core.</p>
							<Link href="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/CV%2FJahazielDanielMarti%CC%81nezLorenzo%20Ingles.pdf?alt=media&token=3b69ba24-a508-4ea2-95e2-0d38c69412eb" className="btn btn-gradient me-2" target="_blank">
								Download CV
								<i className="ri-download-line ms-2" />
							</Link>
							<p className="text-400 mt-6 mb-3">4+ years of experience in design, development, and leadership</p>
							<div className="d-flex gap-3">
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/brand-1.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/brand-2.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/brand-3.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/brand-4.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Iconos%2FLogosPNG%2FFirebaes.png?alt=media&token=dd7bcc9e-62c1-4153-90c0-833591bf7fe1" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 d-none d-md-flex">
									<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Iconos%2FLogosPNG%2FJira.png?alt=media&token=d335afe8-2427-41d6-81ad-98811da950e1" alt="brand" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="shape-1 position-absolute bottom-0 start-50 z-1 ms-10 d-none d-md-block">
					{/* <img className="position-relative z-1 filter-gray" src="/assets/imgs/hero/hero-1/man.png" alt="man" /> */}
					<div className="position-absolute top-50 start-0 translate-middle z-0 mt-8 ms-10 ps-8">
						<img className="ribbonRotate" src="/assets/imgs/hero/hero-1/decorate.png" alt="" />
					</div>
				</div>
				<div className="position-absolute top-0 start-0 w-100 h-100 filter-invert" data-background="assets/imgs/hero/hero-1/background.png" />
			</section>
			<SpeedInsights/>
		</>
	)
}
