const Header=()=>{
    return(
        <div className="headerSection">
        <div className="left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH6zyoODH2ThP-lCFLQbjL4mabGuzS8o05Q&s" width="50px" height="50px"
                                 alt="Myntra Logo" className="logo"/>
            <h2>Myntra</h2>
        </div>
        <div className="center">
            <div className="list">
            <ul>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>HOME & LIVING</li>
                <li>BEAUTY</li>
            </ul>
        </div>
        <div className="search">
           <input type="text"  placeholder="SEARCH HERE..."/>
        </div>
        </div>
        <div className="right">
            <div className="profile">
                <h4>PROFILE</h4>
            </div>
            <div className="cart">
                <h4> ADD TO CART</h4>
            </div>
            <div className="cart">
                <h4> WISHLIST</h4>
            </div>
        </div>
        </div>
            )
        }
    export default Header;