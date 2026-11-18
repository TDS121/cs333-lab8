import "./App.css";
import Contact from "./Contact.jsx";
import contacts from "./contacts.js";

// Takes one contact from the data and returns one Contact card for it
function createContact(contact) {
  console.log("Making a card for:", contact.name);

  
  return (
    <Contact
      key={contact.id}
      name={contact.name}
      phoneNumber={contact.phoneNumber}
      email={contact.email}
      avatar={contact.avatar}
    />
  );
}


// The main page: shows the title and a card for every contact
function App() {
  console.log(contacts);
  console.log("Number of contacts:", contacts.length);

  const names = contacts.map(function (contact) {
    return contact.name;
  });
  console.log(names);

  const favorites = contacts.filter(function (contact) {
    return contact.favorite;
  });
  console.log(favorites);


  return (
    <div>
      <h1>My Contacts</h1>
      {contacts.map(createContact)}
      <h1>Favorites</h1>
      {favorites.map(createContact)}

    </div>
  );
}

export default App;
