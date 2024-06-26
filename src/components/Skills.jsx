import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data";
import React from "react";

export default function Skills() {
	return (
		<section id="skills">
			<div className="container px-5 py-10 my-10 mx-auto text-gray-800 lg:h-screen">
				<div className="text-center mb-20">
					<ChipIcon className="w-10 inline-block mb-4" />
					<h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-700 mb-4">
						Skills &amp; Technologies
					</h1>
					<p className="text-base font-medium text-gray-600 xl:w-2/4 lg:w-3/4 mx-auto">
						Passionate and results-driven Full Stack Web Developer with a
						specialization in the MERN stack. Adept at leveraging cutting-edge
						technologies to develop robust and user-centric web applications.
					</p>
				</div>
				<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
					{skills.map((skill) => (
						<div key={skill} className="p-2 md:w-1/3 w-1/2">
							<div className="bg-gray-800 rounded flex p-4 h-full items-center">
								<BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
								<span className="title-font font-medium text-white">
									{skill}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
