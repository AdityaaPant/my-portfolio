export default function Footer() {
	return (
		<footer className="bg-[#0f0f0f] text-white px-6 py-12 md:px-20">
			<div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
				{/* CTA */}
				<p className="text-sm text-gray-400">
					Want to collaborate or just say hi?{" "}
					<a
						href="mailto:pantanupam05@gmail.com?subject=Hello%20Aditya"
						className="text-[#00b4d8] underline"
					>
						Let’s connect.
					</a>
				</p>

				{/* Social Links */}
				<div className="flex gap-5 text-xl text-gray-400">
					<a
						href="https://x.com/adityapant_"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#1d9bf0] transition"
					>
						<span className="sr-only">X (Twitter)</span>
						<i className="fa-brands fa-x-twitter"></i>
					</a>
					<a
						href="https://www.instagram.com/adityapant_/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#e1306c] transition"
					>
						<span className="sr-only">Instagram</span>
						<i className="fa-brands fa-instagram"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/adityaapant/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#0a66c2] transition"
					>
						<span className="sr-only">LinkedIn</span>
						<i className="fa-brands fa-linkedin-in"></i>
					</a>
					<a
						href="https://github.com/AdityaaPant"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#f5f5f5] transition"
					>
						<span className="sr-only">GitHub</span>
						<i className="fa-brands fa-github"></i>
					</a>
				</div>

				{/* Optional Footer Note */}
				<p className="text-xs text-gray-600 mt-4">
					© {new Date().getFullYear()} Aditya Pant.
				</p>
			</div>
		</footer>
	);
}
