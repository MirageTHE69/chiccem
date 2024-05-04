import React from "react";
import TeamCard from "./TeamCard";
import teamMember1 from "../images/doc1.svg";
import teamMember2 from "../images/doc2.svg";
import teamMember3 from "../images/doc1.svg";
import teamMember4 from "../images/doc2.svg";
import teamMember5 from "../images/doc1.svg";
import teamMember6 from "../images/doc2.svg";

function TeamMember() {
  const teamMembers = [
    { image: teamMember1, name: "John Doe", position: "Doctor" },
    { image: teamMember2, name: "Jane Smith", position: "Nurse" },
    { image: teamMember3, name: "Emily Johnson", position: "Surgeon" },
    { image: teamMember4, name: "Alex Brown", position: "Therapist" },
    { image: teamMember5, name: "Michael Wilson", position: "Physician" },
    { image: teamMember6, name: "Sarah Davis", position: "Pediatrician" },
  ];

  return (
    <div className="w-screen h-screen  flex items-center justify-center">
      <div className="  flex items-center justify-center overflow-hidden">
        <div className="flex">
          {teamMembers.map((teamMember, index) => (
            <div key={index} className="w-1/4 px-2">
              <TeamCard 
                image={teamMember.image} 
                name={teamMember.name} 
                position={teamMember.position} 
              />
            </div>
          ))}
        </div>
      </div>  
    </div>
  );
}

export default TeamMember;
