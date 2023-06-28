export function Button({ children, onClick, onShowAddFriend }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
