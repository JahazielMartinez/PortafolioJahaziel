import Marquee from 'react-fast-marquee'


export default function Brands1() {
	return (
		<>

			<section className="section-brands-1 section-padding">
				<div className="container">
					<div className="text-center">
						<h2>Driving Innovation Through Collaboration</h2>
						<p className="text-300">
							Trusted by businesses and professionals to deliver outstanding design and technology experiences.
						</p>
					</div>
				</div>
				<div className="container-fluid">
					{/* Carausel Scroll */}
					<Marquee className="carouselTicker carouselTicker-right mt-5 position-relative z-1" direction="right">
						<ul className="carouselTicker__list">
							<li className="carouselTicker__item">
								<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Portafolio-imgs%2FBrandsPNG%2F1.%20logo-devmodemerch.png?alt=media&token=a86bed6e-9f1e-4fc2-9552-fe63563e6dd7" alt="devmodemerch" />
							</li>
							<li className="carouselTicker__item">
								<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Portafolio-imgs%2FBrandsPNG%2F2.%20logo-Reno.png?alt=media&token=1505850b-91bf-4c51-8dd1-7bcd96c319ce" alt="Reno" />
							</li>
							<li className="carouselTicker__item">
								<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Portafolio-imgs%2FBrandsPNG%2F3.%20logo-Laleo.png?alt=media&token=9bd42ee4-352f-40c7-b52d-c2a35b6c27eb" alt="LALEO" />
							</li>
							<li className="carouselTicker__item">
								<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Portafolio-imgs%2FBrandsPNG%2F4.%20logo-OnPoint.png?alt=media&token=f7b1349f-ddc7-44b9-bc7f-bed1b01d9624" alt="Onpoint" />
							</li>
							<li className="carouselTicker__item">
								<img src="https://firebasestorage.googleapis.com/v0/b/webdesignoficial-5dcdd.appspot.com/o/Portafolio-imgs%2FBrandsPNG%2F5.%20logo-Kual.png?alt=media&token=13e4581a-f3f0-4281-8886-80ea3c163f0d" alt="GrupoKual" />
							</li>
						</ul>
					</Marquee>
				</div>
			</section>

		</>
	)
}
