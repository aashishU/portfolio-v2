import React from "react";
import { UserIcon } from "@heroicons/react/solid";
// import { Datepicker, Input, initTE } from "tw-elements";
// initTE({ Datepicker, Input }, { allowReinits: true });

export default function Contact() {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
			)
			.join("&");
	};

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", name, email, message }),
		})
			.then(() => alert("Message sent!"))
			.catch((error) => alert(error));
	}

	return (
		<section
			id="contact"
			className="text-gray-400 bg-gray-900 body-font lg:h-screen"
		>
			<div className="container px-5 py-10 mx-auto text-center">
				<UserIcon className="w-10 inline-block mb-4" />
				<h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-16">
					Contact Me
				</h1>
				<div className="container px-5 py-10 mx-auto lg:flex sm:flex-nowrap flex-wrap">
					<div className="lg:w-1/2 md:w-1/2 bg-gray-900 flex flex-col md:mx-auto w-full md:py-8 mt-0 mb-16 md:mt-0">
						<div className="px-auto mt-4 lg:mt-0">
							<h2 className="title-font font-semibold text-white tracking-widest text-sm">
								NAME
							</h2>
							<p className="mt-1 pb-4 text-base font-medium text-indigo-400">
								ASHISH UNIYAL
							</p>
							<h2 className="title-font font-semibold text-white tracking-widest text-sm">
								ADDRESS
							</h2>
							<p className="mt-1 pb-4 text-base font-medium text-indigo-400">
								Pitampura, New Delhi - 110034
							</p>
							<h2 className="title-font font-semibold text-white tracking-widest text-sm">
								EMAIL
							</h2>
							<a className="text-indigo-400 text-base font-medium pb-4">
								ASHISH.UNIYAL599@GMAIL.COM
							</a>
							<h2 className="title-font font-semibold text-white tracking-widest text-sm mt-4">
								PHONE
							</h2>
							<p className="text-indigo-400 text-base font-medium pb-4">
								(+91) 997-161-7931
							</p>
						</div>

						<div className="px-auto lg:mt-8">
							<h2 className="title-font font-semibold text-white tracking-widest text-sm mt-10">
								GITHUB
							</h2>
							<p className="mt-1 pb-4">https://github.com/aashishU</p>
							<h2 className="title-font font-semibold text-white tracking-widest text-sm">
								LINKED IN
							</h2>
							<p className="mt-1">
								https://www.linkedin.com/in/ashishuniyal599
							</p>
						</div>
					</div>

					<form
						netlify
						name="contact"
						className="lg:w-1/2 md:w-1/2 flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0"
					>
						<h2 className="text-white sm:text-3xl text-3xl mb-4 font-medium title-font">
							To Connect
						</h2>
						<p className="text-base font-medium text-gray-400 mb-10">
							Feel free to reach out for job offer or collaboration offer on
							exciting projects through the form or by email. Let's embark on a
							journey of innovation and success together!
						</p>
						<div className="relative mb-4">
							<label htmlFor="name" className="leading-7 text-sm text-gray-400">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="relative mb-4">
							<label
								htmlFor="email"
								className="leading-7 text-sm text-gray-400"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="relative mb-4">
							<label
								htmlFor="message"
								className="leading-7 text-sm text-gray-400"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
								onChange={(e) => setMessage(e.target.value)}
							/>
						</div>
						<button
							type="submit"
							className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
							onClick={handleSubmit}
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
