import { useParams, Link } from "react-router-dom";
import studentsData from "../assets/students.json";
import placeholderImage from "../assets/profile-icon.png";

function StudentDetailsPage() {
  const { studentId } = useParams();

  // Buscar al estudiante por ID
  const student = studentsData.find(
    (s) => String(s._id) === String(studentId)
  );

  // Si no existe el estudiante
  if (!student) {
    return (
      <div className="StudentDetailsPage bg-gray-100 py-6 px-4 border-2 border-green-500 m-2">
        <h1>Student Not Found</h1>
        <Link to="/" className="text-blue-600 underline">
          ⬅ Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="StudentDetailsPage bg-gray-100 py-6 px-4 border-2 border-green-500 m-2">
      <h1>Student Details Page</h1>

      <div className="bg-white p-8 rounded-lg shadow-md mb-6">

        <img
          src={student.image || placeholderImage}
          alt={`${student.firstName} ${student.lastName}`}
          className="rounded-full w-32 h-32 object-cover border-2 border-gray-300"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = placeholderImage;
          }}
        />

        <h1 className="text-2xl mt-4 font-bold">
          {student.firstName} {student.lastName}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-4 border-b pb-4">
          <p>
            <strong>Email:</strong> {student.email}
          </p>

          <p>
            <strong>Phone:</strong> {student.phone}
          </p>

          <p>
            <strong>Program:</strong> {student.program}
          </p>
        </div>

        {/* Back Button */}
        <Link
          to="/"
          className="text-white px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 transition inline-block text-center"
        >
          Back
        </Link>

      </div>
    </div>
  );
}

export default StudentDetailsPage;