"use client";

import Layout from "@/components/layout/Layout";
import SkeletonLoader from "@/components/common/SkeletonLoader";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

interface Certification {
  name: string;
  title: string;
  url: string;
  category: string;
  date: string;
}


export default function Certifications() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [filteredCertifications, setFilteredCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterKey, setFilterKey] = useState<string>("*");

  // Estado para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15; // Número de certificaciones por página

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        // Verificar si ya hay datos en localStorage
        const storedCertifications = localStorage.getItem("certifications");
        if (storedCertifications) {
          const parsedCertifications = JSON.parse(storedCertifications);
          setCertifications(parsedCertifications);
          setFilteredCertifications(parsedCertifications);
          setLoading(false);
          return;
        }

        // Cargar datos desde public/certifications.json
        const response = await fetch("/certifications.json");
        if (!response.ok) throw new Error("Error fetching certifications");

        const data: Certification[] = await response.json();
        setCertifications(data);
        setFilteredCertifications(data);

        // Guardar en localStorage para evitar cargas repetidas
        localStorage.setItem("certifications", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching certifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  useEffect(() => {
    if (filterKey === "*") {
      setFilteredCertifications(certifications);
    } else {
      setFilteredCertifications(
        certifications.filter(
          (cert) => cert.category.toLowerCase() === filterKey.toLowerCase()
        )
      );
    }
    setCurrentPage(1); // Reinicia la paginación al cambiar el filtro
  }, [filterKey, certifications]);

  const handleFilterKeyChange = useCallback((key: string) => () => {
    setFilterKey(key);
  }, []);

  const activeBtn = (value: string) =>
    value === filterKey
      ? "active btn btn-md btn-filter mb-2 me-2 text-uppercase"
      : "btn btn-md btn-filter mb-2 me-2 text-uppercase";

  // Calcula las certificaciones de la página actual
  const paginatedCertifications = filteredCertifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Cambia la página
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <section className="pt-9">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-lg-auto mb-8">
              <div className="text-center">
                <h3 className="ds-3 mt-3 mb-4 text-dark">
                  Certifications That Reflect My<span className="text-300"> Passion for </span> Learning
                </h3>
                <p className="text-300 fs-5 mb-0">
                  A journey through my professional achievements, reflecting commitment to innovation, quality, and continuous development.
                </p>
                <p className="text-300 fs-5 mt-2">Total Certifications: {certifications.length}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section className="section-certifications-1 -130 pb-150">
          <div className="container">
            <div className="button-group filter-button-group filter-menu-active text-center">
              {/* Filtros */}
              {["*", "Crecimiento", "Ingenieria", "UX-UI", "Ingles", "Marketing", "Liderazgo", "Redes", "Video"].map(
                (category) => (
                  <button key={category} className={activeBtn(category)} onClick={handleFilterKeyChange(category)}>
                    {category === "*" ? "All": category}
                  </button>
                )
              )}
            </div>

            <div className="row mt-7 masonry-active">
              {loading ? (
                Array.from({ length: 9 }).map((_, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <SkeletonLoader />
                  </div>
                ))
              ) : paginatedCertifications.length > 0 ? (
                paginatedCertifications.map((cert, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 filter-item">
                    <div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
                      <div className="blog-card__image position-relative">
                        <div className="zoom-img rounded-3 overflow-hidden">
                          <img className="w-100" src={cert.url} alt={cert.name} />
                          <Link
                            className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2"
                            href={cert.url}
                            target="_blank"
                          >
                            {cert.category}
                          </Link>
                        </div>
                      </div>
                      <div className="blog-card__content position-relative text-center mt-4">
                        <h5 className="blog-card__title">{cert.title}</h5>
                        <p className="blog-card__description fs-6">
                          Certification date: {cert.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No certifications available for this category.</p>
              )}
            </div>

            {/* Paginación */}
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
                      {Array.from(
                        { length: Math.ceil(filteredCertifications.length / itemsPerPage) },
                        (_, index) => (
                          <li key={index} className="page-item">
                            <button
                              className={`fs-5 page-link pagination_item border-0 rounded-circle fw-bold d-flex align-items-center justify-content-center ${currentPage === index + 1 ? "bg-primary text-white" : "bg-600"
                                }`}
                              style={{
                                width: "40px",
                                height: "40px",
                              }}
                              onClick={() => handlePageChange(index + 1)}
                            >
                              {index + 1}
                            </button>
                          </li>
                        )
                      )}

                      {/* Botón de Siguiente */}
                      <li className="page-item">
                        <button
                          className="fs-5 page-link pagination_item border-0 rounded-circle fw-bold bg-600 d-flex align-items-center justify-content-center"
                          style={{ width: "40px", height: "40px" }}
                          onClick={() =>
                            handlePageChange(
                              Math.min(
                                currentPage + 1,
                                Math.ceil(filteredCertifications.length / itemsPerPage)
                              )
                            )
                          }
                          aria-label="Next"
                          disabled={
                            currentPage ===
                            Math.ceil(filteredCertifications.length / itemsPerPage)
                          }
                        >
                          <i className="ri-arrow-right-line" />
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
