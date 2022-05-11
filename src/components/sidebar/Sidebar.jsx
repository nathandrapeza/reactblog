import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img
					src="https://scontent.fyxd2-1.fna.fbcdn.net/v/t39.30808-6/258835570_5216188708398062_574361224942588809_n.jpg?_nc_cat=110&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=AVZU-M4cBJcAX9Ckxal&_nc_oc=AQks2oJPCvQbL0QZRv0KV50URsBobFkcKHgTnUuWZ5ESAuvTxMCVkgL2BEqjdBxw_Yk&_nc_ht=scontent.fyxd2-1.fna&oh=00_AT9LRP3WVlmN6by75LD-Kib5Zsi4VrvROEwq-Hsxtpqd8A&oe=62803DC8"
					alt="Nathan Drapeza portrait"
				/>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					<li className="sidebarListItem">Life</li>
					<li className="sidebarListItem">Music</li>
					<li className="sidebarListItem">Style</li>
					<li className="sidebarListItem">Sport</li>
					<li className="sidebarListItem">Tech</li>
					<li className="sidebarListItem">Cinema</li>
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">FOLLOW US</span>
				<div className="sidebarSocial">
				<i className="sidebarIcon fa-brands fa-facebook-square"></i>
				<i className="sidebarIcon fa-brands fa-twitter-square"></i>
				<i className="sidebarIcon fa-brands fa-pinterest-square"></i>
				<i className="sidebarIcon fa-brands fa-instagram-square"></i>
				</div>
			</div>
    </div>
  )
}
