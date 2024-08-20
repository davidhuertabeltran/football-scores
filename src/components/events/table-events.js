import { EventTypes, EventIcons } from "./events"
import { TbRectangleVerticalFilled } from "react-icons/tb";

export const TableEvents = ({ event, reverseLayout }) => {
	return (
		<div className={`table-events flex gap-2 items-center ${reverseLayout ? 'flex-row-reverse' : ''}`}>
			{event.type === EventTypes.Card && (
				event.detail === 'Yellow Card' ? (
					<TbRectangleVerticalFilled
						style={{ fontSize: "2em", color: "yellow", stroke: "black", strokeWidth: "1" }}
					/>
				) : (
					<TbRectangleVerticalFilled
						style={{ fontSize: "2em", color: "red", stroke: "black", strokeWidth: "1" }}
					/>
				)
			)}
			{EventIcons[event.type] || null}
			{event.type !== EventTypes.Subst ? (
				<p>{event.player.name}</p>
			) : (
				<div className={`subtitution flex flex-col gap-1 ${reverseLayout ? 'items-end' : 'items-start'}`}>
					<p className="text-green-500">{event.player.name}</p>
					<p className="text-red-500">{event.assist.name}</p>
				</div>
			)}
		</div>
	)
}