import React from "react";
import { Link } from "react-scroll";

export default function About() {
	return (
		<section id="about">
			<div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
				<div className="md:w-72 md:mr-14 w-60 md:order-2 bg-gray-200 mb-8 md:mb-0 rounded-lg pt-4">
					<img
						className="object-cover object-center rounded-lg"
						src="./hero.png"
						alt="hero"
					/>
				</div>

				<div className="md:order-1  md:w-4/6 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-700">
						Hi,
						<br className=" lg:inline-block sm:break-after-column" />
						I'm Ashish Uniyal
						<br className="lg:inline-block" /> A Full Stack Developer.
					</h1>
					<p className="mb-8 text-base font-medium text-gray-600">
						Passionate MERN stack developer with a knack for crafting dynamic,
						user-centric web applications. I thrive on bringing innovative ideas
						to life through code. <br />
						<br />
						Whether it's building intuitive user interfaces with React.js,
						creating robust backend systems with Node.js and Express, securing
						API endpoints with JSON Web Token or leveraging MongoDB for seamless
						database management, I'm dedicated to pushing the boundaries of
						what's possible in web development.
					</p>
					<ul className="flex justify-center">
						<li className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
							<Link
								to="contact"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="cursor-pointer"
							>
								Work With Me
							</Link>
						</li>
						<li className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
							<Link
								to="projects"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="cursor-pointer"
							>
								See My Past Work
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
