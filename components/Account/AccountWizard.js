import React from "react";

const AccountWizard = ({ title }) => {
  return (
    <div className="bg-white px-2 py-3 uppercase text-lg text-accent border-b border-thin shadow-sm">
      {title}
    </div>
  );
};

export default AccountWizard;