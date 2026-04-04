import "./userArrays.css";

const userArrayObject = [
  {
    id: 1,
    name: "Alice Ray",
    image: "https://mockmind-api.uifaces.co/content/human/220.jpg",
  },
  {
    id: 2,
    name: "Bob Smith",
    image: "https://mockmind-api.uifaces.co/content/human/80.jpg",
  },
];

export const UserArrayComponent = () => {
  return (
    <div className="user-array-container">
      <h3>👥 Usuarios (Array en React)</h3>
      {userArrayObject.map((userArray) => (
        <div key={userArray.id} className="user-card">
          <img
            src={userArray.image}
            alt={userArray.name}
            className="user-image"
          />
          <h4 className="user-name">{userArray.name}</h4>
        </div>
      ))}
    </div>
  );
};
