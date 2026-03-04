import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { IContact } from "../../../shared/models/types";

const ContactDetails = () => {
  // read url param : id
  const { id } = useParams();
  const [contact, setContact] = useState<IContact | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // connect to the REST API: https://jsonplaceholder.typicode.com/users/:id
    // http method: GET
    // REST API Client? axios (npm i axios) or fetch

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response: any) => {
        // successful response
        console.log("Contact details fethed successfully!");
        console.log(response.data);
        setContact(response.data);
      })
      .catch((error: any) => {
        // when error occurs
        console.log(error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
      {/* link to go back */}
      <Link
        to="/contacts"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        &larr; Back to Contacts
      </Link>

      {/* Spinner */}
      {isLoading && (
        <div className="flex items-center justify-center mt-4">
          <div className="w-8 h-8 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error Message */}
      {isError && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
          <p>Failed to load contact details. Please try again.</p>
        </div>
      )}

      {/* Contact Details */}
      {contact && (
        <>
          <div className="bg-gray-100 p-4 rounded">
            <span className="text-gray-500">#1</span>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-700">Email: j@k.com</p>
            <p className="text-gray-700">Phone: 123-456-7890</p>
          </div>
          <div className="mt-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2">
              Update
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactDetails;
