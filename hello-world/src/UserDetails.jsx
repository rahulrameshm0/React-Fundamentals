export const UserDetails = ({
  name,
  isOnline,
  hideOffline,
  isPremium,
  isNewUser,
  role,
}) => {
  if (hideOffline && !isOnline) {
    return null;
  }

  let roleBadge = null;
  if(role === "admin") {
    roleBadge = <span> 🔑 Admin</span>
  }else if (role === "moderator"){
    roleBadge = <span> 👮‍♀️ Moderator</span>
  }else if (role === "VIP"){
    roleBadge = <span> 💎 VIP</span>
  }

  return (
    <div>
      <h3>
        {name}
        {isPremium && <span> ⭐️</span>}
        {isNewUser && <span> 🥳</span>}
        {roleBadge}
      </h3>
      <span>{isOnline ? "🟢 online" : "offline"}</span>
      <p>{isOnline ? "Available for chat" : "Not available right now"}</p>
      {isOnline ? (
        <button>Text Message</button>
      ) : (
        <small>Check back later</small>
      )}
    </div>
  );
};
