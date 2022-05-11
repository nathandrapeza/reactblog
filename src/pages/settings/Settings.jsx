import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img 
                        src="https://scontent.fyxd2-1.fna.fbcdn.net/v/t1.6435-9/85071418_3650777908272491_780403423106291081_n.jpg?_nc_cat=103&ccb=1-6&_nc_sid=174925&_nc_ohc=cHHjY1J1wvUAX_YsINx&_nc_ht=scontent.fyxd2-1.fna&oh=00_AT9XrH0Ro1OXJECIQxTt5f9pjfZU6aYMYsSvq6GZu5Ye4g&oe=62A097B1"
                        alt="Nathan Drapeza portrait"
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
								<label>Username</label>
								<input type="text" placeholder="drapeza"></input>
								<label>Email</label>
								<input type="email" placeholder="drapeza.nathan@gmail.com"></input>
								<label>Password</label>
								<input type="password"></input>
								<button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
