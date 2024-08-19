export const Refresh = () => {
	const refresh = () => {
		window.location.reload();
	}

	return (
		<button
			onClick={refresh}
			className="btn btn-sm fixed bottom-3 right-2 z-40">Refresh</button>
	)
} 