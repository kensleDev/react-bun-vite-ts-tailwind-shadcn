import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/lib/components/ui/popover"
import { Icon } from "../types"

export function TechIconPopover({ name, icon, content }: Icon) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<img src={icon} className="min-w-10 min-h-10 p-2" alt={name} />
			</PopoverTrigger>
			<PopoverContent className="w-80">
				<p>{name}</p>
				{content}
			</PopoverContent>
		</Popover>
	)
}

