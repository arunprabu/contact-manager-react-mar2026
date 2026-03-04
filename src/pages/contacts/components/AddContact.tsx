import { useForm } from "react-hook-form";
import { Link } from "react-router";
import type { IContact } from "../../../shared/models/types";
import axios from "axios";
import { useState } from "react";

const AddContact = () => {
  const { register, handleSubmit } = useForm<IContact>();
  const [isSaved, setIsSaved] = useState(false);

  const onSubmit = (contactForm: IContact) => {
    console.log("submitted", contactForm);
    // send this contactForm data to the REST API
    // connect to the REST API: https://jsonplaceholder.typicode.com/users
    // http method: POST
    // REST API Client? axios (npm i axios) or fetchs
    axios
      .post("https://jsonplaceholder.typicode.com/users", contactForm)
      .then((response: any) => {
        // successful response
        console.log("Contact added successfully!");
        console.log(response.data);
        setIsSaved(true);
      })
      .catch((error: any) => {
        // when error occurs
        console.log(error);
        setIsSaved(false);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Contact</h2>
      {/* link to go back */}
      <Link
        to="/contacts"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        &larr; Back to Contacts
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            {...register("name")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            {...register("email")}
          />
        </div>
        {/* Phone field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            className="w-full px-3 py-2 border rounded"
            {...register("phone")}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Contact
        </button>

        {isSaved && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
            <p>Contact added successfully!</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddContact;
