import React, { useRef, useEffect, useState } from "react";

const LazyImage = ({ src, alt, className, draggable }) => {
	const imageRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(imageRef.current);
				}
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.1, // Adjust the threshold as needed
			}
		);

		observer.observe(imageRef.current);

		return () => {
			if (imageRef.current) {
				observer.unobserve(imageRef.current);
			}
		};
	}, []);

	return (
		<img
			ref={imageRef}
			src={isVisible ? src : ""}
			alt={alt}
			className={className}
			draggable={draggable}
		/>
	);
};

export default LazyImage;
