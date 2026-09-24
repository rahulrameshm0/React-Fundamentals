import { ActionButton } from "./ActionButton";

export const Contacts = () => {
    const handleSendMessage = () => {
        alert("Sending your message")
    }

  return (
    <div>
      <h2>Contact Us</h2>
      <ActionButton text="Send a Message" onClick={handleSendMessage}/>
    </div>
  );
};
