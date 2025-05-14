import { useState, useEffect } from "react";

export default function useDevice() {
	const[isMobile, setIsMobile] = useState(false);
	const[isTablet, setIsTablet] = useState(false);

	useEffect(() => {
		const checkSize = () => {
			const width = window.innerWidth;

			setIsMobile(width < 768);
			setIsTablet(width >= 768 && width <= 1024);
		};

		checkSize();
		window.addEventListener('resize', checkSize);
		return () => window.removeEventListener('resize', checkSize);
	}, []);

	return [ isMobile, isTablet ];
}