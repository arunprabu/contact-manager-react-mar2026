import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { IContact } from "../../shared/models/types";

const ContactsPage = () => {
  console.log("1. Program Started");
  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [isError, setIsError] = useState(false);

  // connect to the REST API: https://jsonplaceholder.typicode.com/users
  // http method: GET
  // REST API Client? axios (npm i axios) or fetch
  useEffect(() => {
    console.log("3. Inside useEffect");
    // ideal place for you to make rest api call
    // after initial rendering of the JSX -- this will get called
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response: any) => {
        // successful response
        console.log("Contacts fethed successfully!");
        console.log(response.data);
        setContacts(response.data);
      })
      .catch((error: any) => {
        // when error occurs
        console.log(error);
        setIsError(true);
      })
      .finally(() => {
        console.log("API call completed");
        setIsLoading(false);
      });
  }, []); // dependency array

  console.log("2. Program Ended");
  return (
    <div>
      {/* header with title on left and add button on right */}
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-3xl font-bold">List Contacts</h1>
        <Link
          to="/contacts/new"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add New Contact
        </Link>
      </div>

      {/* Spinner */}
      {isLoading && (
        <div className="flex items-center justify-center mt-4">
          <div className="w-8 h-8 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
        </div>
      )}

      {/* Grid with Card to display contacts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {/* Example contact card */}
        {contacts.map((contact) => {
          return (
            <div className="bg-white shadow-md rounded-lg p-4" key={contact.id}>
              <h2 className="text-xl font-semibold">{contact.name}</h2>
              <p className="text-gray-600">Email: {contact.email}</p>
              <Link
                to={`/contacts/${contact.id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          );
        })}
      </div>

      {/* error state */}
      {isError && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
          <p>Error loading contacts. Please try again later.</p>
        </div>
      )}
    </div>
  );
};

export default ContactsPage;
