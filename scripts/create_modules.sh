#!/bin/bash

PAGES=(
  Dashboard Companies CreateCompany CompanyDetails Jobs JobDetails CreateJob
  Users UserDetails Posts Applications Resumes ResumeBuilder
  Notifications Reviews Favorites
  Interviews InterviewDetails
  Roles Settings AdminDashboard
  Points Login Register ForgotPassword
)

mkdir -p src/pages

for PAGE in "${PAGES[@]}"; do
  FILE="src/pages/${PAGE}.tsx"
  if [ ! -f "$FILE" ]; then
    echo "Creating $FILE"
    cat <<EOF > "$FILE"
import React from "react";

const ${PAGE} = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">${PAGE} Page</h1>
    </div>
  );
};

export default ${PAGE};
EOF
  fi
done

echo "✅ All dummy page files created."

