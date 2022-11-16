import Navbar from './navbar';
import Sidepanel from './sidepanel';
function Header(){
    return(
        <header class="app-header fixed-top">	 
        {/*//app-header*/} 
		         
       <Navbar />
		<Sidepanel />
	  
    </header>
    )
}

export default Header;