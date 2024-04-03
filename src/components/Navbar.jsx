import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";
import React from "react";

export default function Navbar() {
	return (
		<header className="bg-gray-900 md:sticky top-0 z-10">
			<ul className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<li className="title-font font-medium text-white mb-4 md:mb-0">
					<Link
						to="about"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						className="ml-3 text-xl cursor-pointer"
					>
						Ashish Uniyal
					</Link>
				</li>
				<div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
					<li className="mr-5 text-gray-400 hover:text-white">
						<Link
							to="projects"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="cursor-pointer"
						>
							Projects
						</Link>
					</li>
					<li className="mr-5 text-gray-400 hover:text-white">
						<Link
							to="skills"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="cursor-pointer"
						>
							Skills
						</Link>
					</li>
					<li className="mr-5 text-gray-400 hover:text-white">
						<Link
							to="contact"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="cursor-pointer"
						>
							Contact
						</Link>
					</li>
				</div>
				<a
					href="./resume.pdf"
					className="inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-gray-400 mt-4 md:mt-0"
					target="_blank"
				>
					Resume
					<ArrowRightIcon className="w-4 h-4 ml-1" />
				</a>
			</ul>
		</header>
	);
}
