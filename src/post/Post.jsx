import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg"
				src="https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg"
				alt="Dog sleeping on bed."
      />
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Music</span>
					<span className="postCat">Life</span>
				</div>
				<span className="postTitle">Lorem ipsum dolor sit amet.</span>
				<hr></hr>
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
    </div>
  )
}
