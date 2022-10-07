import "./sidebar.css";
const sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebaritem">
        <span>ABOUT ME</span>
        <img src="wall1.jpg" alt="" />
    
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          incidunt perferendis
        </p>
        </div>
        <div className="sidebaritem">
            <span>CATEGORIES</span>
        <ul className="sidebarlist">
            <li className="listitem">Home</li>
            <li className="listitem">Sport</li>
            <li className="listitem">Life</li>
            <li className="listitem">Music</li>
        </ul>
        </div>
        <div className="sidebaritem">
            <span>FOLLOW US</span>
            </div>
        <div className="sidebarSocial">
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-square-twitter"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-square-pinterest"></i>
        </div>
    </section>
  );
};

export default sidebar;
