export default function Background() {
	return (
		<div className="fixed w-full h-full top-0 flex flex-col justify-between" style={{ zIndex: -1, opacity: 0.5 }}>
			<div className="flex justify-between">
				<img src="/images/background/topLeft.png" alt="top-left" />
				<img src="/images/background/topRight.png" alt="top-right" />
			</div>
			<div className="flex justify-between">
				<img src="/images/background/bottomLeft.png" alt="bottom-left" />
				<img src="/images/background/bottomRight.png" alt="bottom-right" />
			</div>
		</div>
	);
}
