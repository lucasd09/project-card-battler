import { cn } from "@/lib/utils";
import { Heart, Sword } from "lucide-react";
import { useCardTilt } from "./hooks/use-card-tilt";
import type { UnitProps } from "./types";

export const UnitCard = ({ data: unit, size = "md" }: UnitProps) => {
	const { cardRef, containerRef, eventHandlers, shineRef } = useCardTilt();

	const imgSize = size === "md" ? "w-60" : "w-96";
	const titleSize = size === "md" ? "text-lg" : "text-3xl";
	const iconSize = size === "md" ? "size-5" : "size-7";

	return (
		<div
			ref={containerRef}
			className="relative w-fit h-72 [perspective:1000px] select-none"
			{...eventHandlers}
		>
			<div
				ref={cardRef}
				className="relative border-2 rounded h-full overflow-hidden transform-gpu will-change-transform transition-[box-shadow] duration-200 ease-out bg-black/0"
				style={{ boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
			>

				{shineRef && (
					<div
						ref={shineRef}
						className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-60 animate-shimmer"
						style={{
							backgroundSize: "300% 300%",
							animation: "shimmerMove 6s ease-in-out infinite",
						}}
					/>
				)}


				<img
					alt={unit.name}
					src={unit.imgUrl}
					className={cn("select-none pointer-events-none", imgSize)}
					draggable={false}
				/>

				<div className="absolute bottom-0 w-full px-4 pb-2 pt-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-center">
					<p className={cn("text-white font-bold", titleSize)}>{unit.name}</p>
					<div className="flex justify-between items-center text-white">
						<p
							className={cn(
								"font-extrabold text-red-500 text-lg inline-flex items-center gap-1",
								titleSize,
							)}
						>
							<Sword className={cn("text-red-500", iconSize)} />
							{unit.damage}
						</p>
						<p
							className={cn(
								"font-extrabold text-emerald-500 text-lg inline-flex items-center gap-1",
								titleSize,
							)}
						>
							<Heart className={cn("text-emerald-500", iconSize)} />
							{unit.health}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
