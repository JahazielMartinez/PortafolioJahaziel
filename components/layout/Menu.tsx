import Link from "next/link"
import { usePathname } from "next/navigation" // usePathname is more suited for client-side path checking

export default function Menu() {
	const pathname = usePathname()

	return (
		<>
			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
				<li className="nav-item">
					<Link href="/" className={pathname === "/" ? "nav-link active" : "nav-link"}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/services" className={pathname === "/services" ? "nav-link active" : "nav-link"}>
						About Me
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/work" className={pathname === "/work" ? "nav-link active" : "nav-link"}>
						Projects
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/certifications" className={pathname === "/certifications" ? "nav-link active" : "nav-link"}>
						Certifications
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/blog-list" className={pathname === "/blog-list" ? "nav-link active" : "nav-link"}>
						Blog
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/#contact" className={pathname === "#contact" ? "nav-link active" : "nav-link"}>
						Contact
					</Link>
				</li>
			</ul>
		</>
	)
}
