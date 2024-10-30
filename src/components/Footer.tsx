interface FooterProp {
  onMenuOpen: () => void;
}

export const Footer = ({ onMenuOpen }: FooterProp) => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 16;
  const isOpen: boolean = openHour <= hour && hour < closeHour;
  return (
    <footer className="footer">
      <div className="order">
        <p>
          Time: {new Date().toLocaleTimeString()} -
          {isOpen ? "We're Currently Open" : "Sorry. We're Closed"}
        </p>
        {isOpen && (
          <button className="btn" onClick={() => onMenuOpen()}>
            Order Now
          </button>
        )}
      </div>
    </footer>
  );
};
