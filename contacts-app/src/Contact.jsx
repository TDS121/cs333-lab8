import Avatar from "./Avatar.jsx";


// Shows one contact: picture, name, phone, and email if there is one
function Contact(props) {
  console.log(props);

  return (
    <div className="contact">
      <Avatar src={props.avatar} name={props.name} />  
      <h2>{props.name}</h2>
      <p>Phone: {props.phoneNumber}</p>
      {props.email && <p>Email: {props.email}</p>}
    </div>
  );
}

export default Contact;
