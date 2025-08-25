import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function Home() {
	return (
		<div>
			<header>
				<Header />
			</header>

			<div className="min-h-screen scroll-smooth bg-[#0f0f0f] text-white px-6 py-10 md:px-20 font-sans">
				<div className="flex flex-col gap-12 max-w-3xl mx-auto text-[17px] leading-relaxed">
					{/* Hero Section */}
					<section id="home" className="flex flex-col items-start">
						<h2 className="text-3xl sm:text-4xl font-bold mb-2">
							👋 Hey, I&apos;m{" "}
							<span className="text-[#facc15]">Aditya Pant</span>
						</h2>

						<p className="text-gray-500 text-sm mb-3">
							Full Stack Developer focused on clean design, solid performance,
							and user-first thinking.
						</p>

						<p className="text-gray-400 border-b border-gray-800 pb-6">
							I&apos;m a software developer from{" "}
							<span className="">Uttarakhand, India</span> who loves turning
							ideas into code.{" "}
							<span className="font-medium">
								Evolving with intention, not perfection
							</span>
							, I&apos;m all about learning, building, and getting better every
							day.
						</p>
					</section>

					{/* Work Section */}
					<section id="projects">
						<h3 className="text-xl font-semibold text-gray-200 mb-2">
							What I Do 🚀
						</h3>
						<p className="text-gray-400 border-b border-gray-800 pb-6">
							I&apos;m currently working as a{" "}
							<span className="font-medium">Full Stack Developer at</span>{" "}
							<span className="inline-block bg-[#00b4d8]/10 text-[#00b4d8] font-medium px-3 py-[1px] m-1 rounded-md text-sm border border-[#00b4d8]">
								The Asian Kid
							</span>
							, where we&apos;re building a coaching platform to connect
							teachers and students. The goal is to create a friendly and
							efficient environment that makes both teaching and learning
							smooth, accessible, and engaging. From backend logic to frontend
							UI, I&apos;m helping craft a complete digital experience.
						</p>
					</section>

					{/* About Me Section */}
					<section id="about">
						<h3 className="text-xl font-semibold text-gray-200 mb-2">
							About Me 🧑‍💻
						</h3>
						<p className="text-gray-400">
							I&apos;m{" "}
							<span className="text-[#facc15] font-medium">Aditya Pant</span>, a
							B.Tech CSE student at{" "}
							<span className="text-[#94d2bd] font-medium">CGC Landran</span>{" "}
							with a strong passion for building on the web. I specialize in
							full stack development using tools like TypeScript, JavaScript,
							React.js, Next.js, Tailwind CSS, Node.js, PostgreSQL, and MongoDB.
						</p>
						<p className="text-gray-400 mt-4">
							Outside of tech, I&apos;m an{" "}
							<span className="text-[#f59e0b] font-medium">ex-NCC cadet</span>{" "}
							with multiple camps attended, and an{" "}
							<span className="text-[#f472b6] font-medium">
								active sportsperson
							</span>{" "}
							who has represented my college at national, state, and regional
							levels. I also love traveling to new places and I&apos;m currently
							working on freelance projects to sharpen my skills.
						</p>
					</section>
				</div>
			</div>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}
