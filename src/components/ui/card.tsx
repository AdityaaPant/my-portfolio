import Link from "next/link";
import Image from "next/image";
interface ProjectCardProps {
	title: string;
	subtitle: string;
	description: string;
	tech: string[];
	url?: string;
	imageUrl?: string;
}

export default function ProjectCard({
	title,
	subtitle,
	description,
	tech,
	url,
	imageUrl,
}: ProjectCardProps) {
	return (
		<div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group">
			<div>
				{imageUrl && (
					<Image src={imageUrl} width={500} height={200} alt="Project Image" />
				)}{" "}
			</div>
			<div className="flex flex-col gap-2">
				{url ? (
					<Link
						href={url}
						target="_blank"
						className="text-base sm:text-lg font-semibold text-white group-hover:text-[#00b4d8] transition"
					>
						{title}
					</Link>
				) : (
					<span className="text-base sm:text-lg font-semibold text-white">
						{title}
					</span>
				)}
				<p className="text-sm text-gray-400">{subtitle}</p>
				<p className="text-gray-300 mt-2 mb-4">{description}</p>
				<div className="flex flex-wrap gap-2">
					{tech.map((item, index) => (
						<span
							key={index}
							className="px-3 py-[3px] text-sm text-gray-300 bg-[#1f1f1f] rounded-full border border-gray-700 transition duration-200 hover:border-[#00b4d8]"
						>
							{item}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
