const Navbar = () => {
    return ( 
<nav className="Navbar">
    
    <div className="NavD">
    <nav >
        
        <ul>
        <h1 style={{display:"flex",fontSize:35}}>HiRec</h1>
        <li href="/">Home</li>
        <li link to="/pages/create">Create Music</li>
        <li link to="/pages/buy">Buy Music</li>
        <li link to="/pages/lease">Lease Music</li>
        </ul>
        </nav> 
    </div>
</nav>

     );
}
 
export default Navbar;