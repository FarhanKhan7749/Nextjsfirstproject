import { Fragment } from "react";

import { useRouter } from 'next/router';

const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

function DevName() {
  const router = useRouter();
  const { id } = router.query;

  // Convert id to a number and find the corresponding team member
  const teamMember = details.find((member) => member.id === Number(id));

  return (
    <Fragment>
      {teamMember ? (
        <div>
          <h1>{teamMember.name}</h1>
          <p>{teamMember.role}</p>
        </div>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </Fragment>
  );
}

export default DevName;