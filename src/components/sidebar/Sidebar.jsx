import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img
					src="https://scontent.fyxd2-1.fna.fbcdn.net/v/t1.6435-9/85071418_3650777908272491_780403423106291081_n.jpg?_nc_cat=103&ccb=1-6&_nc_sid=174925&_nc_ohc=cHHjY1J1wvUAX_YsINx&_nc_ht=scontent.fyxd2-1.fna&oh=00_AT9XrH0Ro1OXJECIQxTt5f9pjfZU6aYMYsSvq6GZu5Ye4g&oe=62A097B1"
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
