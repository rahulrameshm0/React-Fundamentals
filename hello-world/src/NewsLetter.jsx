import { ActionButton } from "./ActionButton";

export const NewsLetter = () => {

    const SubscribeToNewsLetter = () => {
        alert("You have subsrcibed to the news letter")
    };
  return <div>
    <h3>Subscribe for the New Letter</h3>
    <ActionButton text="Subsrbe" onClick={SubscribeToNewsLetter}/>
  </div>;
};
