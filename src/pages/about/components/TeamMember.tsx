const TeamMember = ({ name, role, children }: any) => {
  /* props are objects
   * in props you can receive data from parent component
   * props are read-only
   * props can also receive children - the content between the opening and closing tags of the component when it's used
   */
  console.log({ name, role, children });

  return (
    <div className="border p-4 rounded">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">{role}</p>
      <p>{children}</p>
    </div>
  );
};

export default TeamMember;
