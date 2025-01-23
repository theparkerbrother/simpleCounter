import React from "react";


//create your first component
const Clock = ({firstDigit, secondDigit, thirdDigit, fourthDigit}) => {
	return (
		<div className="text-center container d-flex justify-content-center align-items-start pt-5" style={{ height: "100vh" }}>
			<div className="mainContainer">
				<div className="digit">
					<i className="fa-solid fa-clock"></i>
				</div>
				<div className="digit">{ firstDigit % 10}</div>
				<div className="digit">{ secondDigit % 10}</div>
				<div className="digit">{ thirdDigit % 10}</div>
				<div className="digit">{ fourthDigit % 10}</div>
			</div>
		</div>
	);
};

export default Clock;