import { useState } from "react";
import organizationData from "../../data/organization.json";

export const Organization = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="organization-section">
      <h2>Leadership and Management</h2>
      <div className="org-list">
        {organizationData.map((member) => (
          <div key={member.id} className="org-member">
            <div 
              className="org-header" 
              onClick={() => toggleExpand(member.id)}
            >
              <div>
                <h3>{member.role}</h3>
                <p className="org-name">{member.name}</p>
              </div>
              <button className="expand-btn" type="button">
                {expandedId === member.id ? "><" : "+"}
              </button>
            </div>
            {expandedId === member.id && (
              <div className="org-description">
                <p>{member.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};