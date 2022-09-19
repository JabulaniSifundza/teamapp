import React from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';




const TeamMemberCard = ({selectedTeam, handleEmployeeCardClick, employee}) =>{
	return {
		<div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2")} style={{cursor:"pointer"}} onClick={handleEmployeeCardClick}>
	{(employee.gender === 'male') ? <img src={maleProfile} alt="Employee" className="card-img-top"/> : <img src={femaleProfile} alt="Employee" className="card-img-top"/>}
	<div className="card-body">
		<h5 className="card-title">Full Name: {employee.fullName}</h5>
		<p className="card-text"><b>Designation</b>{employee.designation}</p>
	</div>
	</div>

		
	}
}

export default TeamMemberCard;


	
	 