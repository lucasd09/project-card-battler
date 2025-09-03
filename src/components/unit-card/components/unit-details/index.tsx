import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { UnitCard } from "../..";
import type { UnitDetailsProps } from "./types";

export const UnitDetails = ({ unit }: UnitDetailsProps) => {
	return (
		<Dialog>
			<DialogTrigger className="flex">
				<UnitCard data={unit} />
			</DialogTrigger>
			<DialogContent className="flex md:max-w-5xl bg-transparent border-0 shadow-none">
				<UnitCard data={unit} size="lg" />
				<div>
					<p>Name: {unit.name}</p>
					<p>DMG: {unit.damage}</p>
					<p>HP: {unit.health}</p>
				</div>
			</DialogContent>
		</Dialog>
	);
};
