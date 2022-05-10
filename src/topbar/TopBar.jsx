import './topBar.css'

export default function TopBar() {
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
					<li className="topListItem">HOME</li>
					<li className="topListItem">ABOUT</li>
					<li className="topListItem">CONTACT</li>
					<li className="topListItem">WRITE</li>
					<li className="topListItem">LOGOUT</li>
				</ul>
			</div>
			<div className="topRight">cc</div>
				<img className="topImg"
				  src="https://media-exp1.licdn.com/dms/image/C5603AQEH9A8NCagiWw/profile-displayphoto-shrink_800_800/0/1652123095601?e=1657756800&v=beta&t=0TgwPIsHoFuHP6YsIjBjKWvro-N-KKV9btnoiyqCat8"
					alt="Nathan Drapeza standing next to a Camel.">
				</img>
				<i class="topSearchIcon fa-solid fa-magnifying-glass"></i>

    </div>
  )
}
