export const Refresh = ({ fetchData }) => {
	return (
		<button
			onClick={fetchData}
			className="btn btn-sm fixed bottom-3 right-2 z-40">Refresh</button>
	)
} 