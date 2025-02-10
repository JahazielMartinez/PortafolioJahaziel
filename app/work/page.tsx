"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

interface Project {
	name: string;
	image: string;
	date: string;
	category: string;
	description: string;
	client?: string;
	completionTime?: string;
	tools?: string[];
	url?: string;
}

export default function Work() {
	const [projects, setProjects] = useState<Project[]>([]);
	const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 9; // Número de proyectos por página
	const [filterKey, setFilterKey] = useState<string>("*");

	const filteredProjects =
		filterKey === "*"
			? projects
			: projects.filter((project) => project.category.toLowerCase() === filterKey.toLowerCase());


	const paginatedProjects = filteredProjects.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const handleFilterKeyChange = (key: string) => () => {
		setFilterKey(key);
		setCurrentPage(1); // Reiniciar la paginación cuando cambie el filtro
	};


	useEffect(() => {
		fetch("/projects.json")
			.then((res) => res.json())
			.then((data) => {
				setProjects(data.projects);
				setFeaturedProjects(data.featuredProjects);
			})
			.catch((error) => console.error("Error loading projects:", error));
	}, []);

	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-work pt-9 pb-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto">
									<div className="text-center">
										<h3 className="ds-3 mt-3 mb-4 text-dark">
											Explore My<span className="text-300"> Design and Engineering </span>{" "}
											Projects
										</h3>
										<p className="text-300 fs-5">
											From Intuitive Interfaces to Full Stack Development: Innovation, Scalability, and UX/UI in Action.
											<br />
											A detailed look at how I combine technology, design, and software architecture to create impactful digital experiences.
										</p>
										<p className="text-300 fs-5 mt-2">Total Projects: {projects.length + featuredProjects.length}</p>

									</div>
								</div>
							</div>
						</div>

						{/* Proyectos Destacados */}
						<div className="container">
							<div className="row">
								<div className="card-scroll mt-8">
									<div className="cards">
										{featuredProjects.map((project, index) => (
											<div className="card-custom" data-index={index} key={index}>
												<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
													<div className="card__image-container zoom-img position-relative">
														<img className="card__image" src={project.image} alt={project.name} />
														{/* Imagen con overlay que abre en una nueva pestaña */}
														<a
															href={project.url}
															target="_blank"
															rel="noopener noreferrer"
															className="card-image-overlay position-absolute start-0 end-0 w-100 h-100"
														/>
													</div>
													<div className="card__content px-md-4 px-3">
														<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
															{/* Categoría que redirige al URL del proyecto */}
															<a
																href={project.url}
																target="_blank"
																rel="noopener noreferrer"
																className="card_title_link"
															>
																<p className="text-primary-1 mb-0 mb-md-2">{project.category}</p>
																<h3 className="fw-semibold">{project.name}</h3>
															</a>
															{/* Ícono que también abre en una nueva pestaña */}
															<a
																href={project.url}
																target="_blank"
																rel="noopener noreferrer"
																className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle"
															>
																<i className="ri-arrow-right-up-line" />
															</a>
														</div>
														<p className="text-300 mb-lg-auto mb-md-4 mb-3">{project.description}</p>
														<div className="d-md-flex content">
															<p className="mb-0 fs-7 text-dark text-uppercase w-40">Client</p>
															<p className="mb-0 card__description text-300 fs-6 mb-0">{project.client}</p>
														</div>
														<div className="d-md-flex content">
															<p className="mb-0 fs-7 text-dark text-uppercase w-40">Completion Time</p>
															<p className="mb-0 card__description text-300 fs-6 mb-0">{project.completionTime}</p>
														</div>
														<div className="d-md-flex content">
															<p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
															<p className="mb-0 card__description text-300 fs-6 mb-0">
																{project.tools ? project.tools.join(", ") : "N/A"}
															</p>
														</div>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>


						{/* Filtro */}
						<div className="section-work pt-120 button-group filter-button-group filter-menu-active text-center">
							{["*", "App", "Liderazgo", "Marketing", "UX-UI", "Web", "Video"].map((category) => (
								<button
									key={category}
									className={filterKey === category ? "active btn btn-md btn-filter mb-2 me-2 text-uppercase" : "btn btn-md btn-filter mb-2 me-2 text-uppercase"}
									onClick={handleFilterKeyChange(category)}
								>
									{category === "*" ? "All" : category}
								</button>
							))}
						</div>

						{/* Listado */}
						<div>
							<section className="section-blog-list pt-100">
								<div className="container">
									<div className="row mt-8">
										{paginatedProjects.map((project, index) => (
											<div className="col-lg-4" key={index}>
												<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
													<div className="blog-card__image position-relative">
														<div className="zoom-img rounded-3 overflow-hidden">
															<img className="w-100 img-projects" src={project.image} alt={project.name} />
															{/* Botón de categoría con URL */}
															<a
																className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2"
																href={project.url} // Se usa la URL desde el JSON
																target="_blank" // Abre en una nueva pestaña
																rel="noopener noreferrer" // Seguridad adicional
															>
																{project.category}
															</a>
															{/* Ícono de acceso al detalle */}
															<a
																href={project.url}
																target="_blank"
																rel="noopener noreferrer"
																className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle"
															>
																<i className="ri-arrow-right-up-line text-dark" />
															</a>
														</div>
													</div>
													<div className="blog-card__content position-relative text-center mt-4">
														<p className="blog-card__description fs-6">{project.description}</p>
														<h5 className="blog-card__title">{project.name}</h5>
														<span className="blog-card__date fs-7">{project.date}</span>
														{/* Enlace oculto en toda la tarjeta */}
														<a
															href={project.url}
															target="_blank"
															rel="noopener noreferrer"
															className="link-overlay position-absolute top-0 start-0 w-100 h-100"
														/>
													</div>
												</div>
											</div>
										))}
									</div>

								</div>
							</section>
						</div>

						<div className="container-fluid">
							<div className="row py-4">
								<div className="col d-flex justify-content-center align-items-center">
									<nav aria-label="Page navigation example" className="pagination-container">
										<ul className="pagination gap-2 flex-wrap justify-content-center">
											{/* Botón de Anterior */}
											<li className="page-item">
												<button
													className="fs-5 page-link pagination_item border-0 rounded-circle fw-bold bg-600 d-flex align-items-center justify-content-center"
													style={{ width: "40px", height: "40px" }}
													onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
													aria-label="Previous"
													disabled={currentPage === 1}
												>
													<i className="ri-arrow-left-line" />
												</button>
											</li>

											{/* Botones de Página */}
											{Array.from({ length: Math.ceil(projects.length / itemsPerPage) }, (_, index) => (
												<li key={index} className="page-item">
													<button
														className={`fs-5 page-link pagination_item border-0 rounded-circle fw-bold d-flex align-items-center justify-content-center ${currentPage === index + 1 ? "bg-primary text-white" : "bg-600"}`}
														style={{ width: "40px", height: "40px" }}
														onClick={() => handlePageChange(index + 1)}
													>
														{index + 1}
													</button>
												</li>
											))}

											{/* Botón de Siguiente */}
											<li className="page-item">
												<button
													className="fs-5 page-link pagination_item border-0 rounded-circle fw-bold bg-600 d-flex align-items-center justify-content-center"
													style={{ width: "40px", height: "40px" }}
													onClick={() => handlePageChange(Math.min(currentPage + 1, Math.ceil(projects.length / itemsPerPage)))}
													aria-label="Next"
													disabled={currentPage === Math.ceil(projects.length / itemsPerPage)}
												>
													<i className="ri-arrow-right-line" />
												</button>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>

					</section>
				</div>
			</Layout>
		</>
	);
}
