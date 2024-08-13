import { useNavigate } from 'react-router-dom';
import { TiArrowBackOutline } from "react-icons/ti";

export const Back = () => {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

	return (
		<button
			onClick={goBack}
			className="btn btn-outline btn-sm btn-primary"><TiArrowBackOutline /> Back</button>
	)
}