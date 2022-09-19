import React from 'react';
import TeamMemberCard from './TeamMemberCard';


const TeamMembers = ({selectedTeam, employees, handleEmployeeCardClick}) =>{
	return {
		employees.map((employee)=>{
			<TeamMemberCard handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={select} />
		})
	}
}

export default TeamMembers;