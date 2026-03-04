import TeamMember from "./components/TeamMember";

const AboutPage = () => {
  const heading = "About Us";

  const teamMembers = [
    {
      name: "John Doe",
      role: "Software Engineer",
    },
    {
      name: "Steve Smith",
      role: "AI Engineer",
    },
  ];

  let colors = ["red", "green", "blue", "yellow", "purple"];

  return (
    <div>
      <h1 className="text-3xl font-bold">{heading}</h1>
      <h2 className="text-2xl font-semibold">Data Binding | Demo</h2>
      <p>{heading}</p>
      <input type="text" value={heading} readOnly className="border p-2" />
      <hr />
      <h2 className="text-2xl font-semibold mt-5">Props | Demo</h2>
      <TeamMember {...teamMembers[0]}></TeamMember>
      <TeamMember {...teamMembers[1]} />

      <hr />
      <h2 className="text-2xl font-semibold mt-5">
        Conditional Rendering with ternary operator | Demo
      </h2>
      {colors && colors?.length > 0 ? (
        <div className="bg-green-200">
          <p>Colors are available</p>
        </div>
      ) : (
        <div className="bg-red-200">
          <p>No colors available</p>
        </div>
      )}

      <hr />
      <h2 className="text-2xl font-semibold mt-5">
        Conditional Rendering and Lists & Keys | Demo
      </h2>
      {colors && colors?.length > 0 ? (
        <ul>
          {/* Lists & Keys  */}
          {colors.map((color, index) => {
            // index is not recommended as key, but we can use it if we don't have any unique value in the list items
            return <li key={index}>{color}</li>;
          })}
        </ul>
      ) : (
        <div className="bg-red-200">
          <p>No colors available</p>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
