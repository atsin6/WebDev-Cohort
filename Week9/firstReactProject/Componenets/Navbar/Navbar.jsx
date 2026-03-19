import { useEffect, useState } from 'react'
import './Navbar.css';



const Navbar = () => {

    const [count, setCount] = useState(0);

    function increaseCount(){
        console.log("calling increase count");
        setCount(currentvalue => currentvalue+1);
    }

    useEffect(() => {
        console.log("above setInterval")
        setInterval(increaseCount, 5000);
    }, []) // this effect will run on mount, because this array is empty

    useEffect(() => {
        console.log("the count has been updated to: " + count);
    }, [count])

    

    return (
        <nav id='nav'>
            <div id='imgAndSearchDiv'>
                <img id='LinkedInLogo' src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png" alt="LinkedIn" />
            
            </div>
            
            <div className='navigationMenu'>
                <div className='navOption'>
                    <img className='icons' src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png" alt="Home" />
                    <p>Home</p>
                </div>
            
                <div className='navOption'>
                    <img className='icons' src="https://cdn-icons-png.flaticon.com/128/17665/17665615.png" alt="My Network" />
                    <p>My Network</p>
                </div>
                
                <div className='navOption'>
                    <img className='icons' src="https://cdn-icons-png.flaticon.com/128/2910/2910791.png" alt="Jobs" />
                    <p>Jobs</p>
                </div>
                    
                <div className='navOption'>
                    <img className='icons' src="https://cdn-icons-png.flaticon.com/128/6738/6738419.png" alt="Messaging" />
                    <p>Messaging</p>
                </div>

                <div className='navOption'>
                    <div className="notification-container">
                        <img src="https://cdn-icons-png.flaticon.com/128/3247/3247250.png" className="icons" />
                        <span id="notificationCount">{count}</span>
                    </div>
                    <span>Notifications</span>
                </div>

                <div className='navOption'>
                    
                    <img className='icons' src="https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" alt="profile" />
                    <p>Me</p>
                </div>
            </div> 
        </nav>
    )
}

export default Navbar