import { useParams } from "react-router-dom";

export default function CompanyDetails() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Company Details</h1>
      <p>Showing details for company ID: {id}</p>

      <div className="mt-6 space-y-2">
        <p><strong>Name:</strong> Example Company</p>
        <p><strong>Industry:</strong> IT Services</p>
        <p><strong>Website:</strong> <a href="https://example.com" className="text-blue-600">https://example.com</a></p>
        <p><strong>Employees:</strong> 120</p>
        <p><strong>Founded Year:</strong> 2010</p>
        <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Jobs Posted</h2>
        <ul className="list-disc list-inside">
          <li>Frontend Developer</li>
          <li>Backend Developer</li>
          <li>UI/UX Designer</li>
        </ul>
      </div>
    </div>
  );
}

