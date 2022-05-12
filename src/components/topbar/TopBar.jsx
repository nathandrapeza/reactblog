import { Link } from 'react-router-dom';
import './topBar.css'

export default function TopBar() {
  const user = true;
  return (
    <div className="top">
			<div className="topLeft">
				<i className="topIcon fa-brands fa-facebook-square"></i>
				<i className="topIcon fa-brands fa-twitter-square"></i>
				<i className="topIcon fa-brands fa-pinterest-square"></i>
				<i className="topIcon fa-brands fa-instagram-square"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link to="/" className="link">HOME</Link>
					</li>
					<li className="topListItem">
						<Link to="/" className="link">ABOUT</Link>
					</li>
					<li className="topListItem">
						<Link to="/" className="link">CONTACT</Link>
					</li>
					<li className="topListItem">
						<Link to="/write" className="link">WRITE</Link>
					</li>
					<li className="topListItem">
						{user && "LOGOUT"}
					</li>
				</ul>
			</div>
			<div className="topRight">
				{
					user ? (
				
				<img className="topImg"
				  src="https://media-exp1.licdn.com/dms/image/C5603AQEH9A8NCagiWw/profile-displayphoto-shrink_800_800/0/1652123095601?e=1657756800&v=beta&t=0TgwPIsHoFuHP6YsIjBjKWvro-N-KKV9btnoiyqCat8"
					alt="Nathan Drapeza standing next to a Camel.">
				</img>
					) : (
						<ul className="topList">
							<li className="topListItem">
								<Link to="/login" className="link">LOGIN</Link>
							</li>
							<li className="topListItem">
								<Link to="/register" className="link">REGISTER</Link>
							</li>
						</ul>
					)} 
				<i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
			</div>
    </div>
  )
}
