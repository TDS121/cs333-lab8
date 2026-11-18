import "./App.css";
import Contact from "./Contact.jsx";


function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      <Contact
        name="Spiderman" 
        phoneNumber="541-555-0101"
        email="spidey@avengers.com" 
        avatar="https://i.pravatar.cc/150?img=6"
      />
      <Contact 
        name="Ironman" 
        phoneNumber="541-555-0102" 
        email="metalman@avengers.com"
        avatar="https://i.pravatar.cc/150?img=50"
      />
      <Contact 
        name="Goldilox" 
        phoneNumber="541-555-0103" 
        email="goldy@avengers.com"
        avatar="https://i.pravatar.cc/150?img=64"
      />
    </div>
  );
}

export default App;
