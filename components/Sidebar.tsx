import {AiFillGithub,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import{SiLeetcode} from 'react-icons/si'
import { useTheme } from "next-themes";
import {GiTie} from 'react-icons/gi'
const Sidebar = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
    return (
        <div>
            <img src='ima.jpg' alt="user pic" className="w-32 h-32 mx-auto rounded-full"/>
            <h3 className = "my-4 text-3xl font-medium tracking-wider font-poppins"> Mohammed <span className="text-mauve-b">Akhlas</span> Hussain</h3>
            <p className = "px-2 py-1 my-3 bg-gray-200 rounded-full ">Full Stack Developer</p>
            <a className = "px-2 py-1 my-3 bg-gray-200 rounded-full flex item-center justify-center" href='https://medium.com/@akhlashussain' target='blank'>
                {/*href="/resume.pdf" download = "resume.pdf"> */}
            My Blogs
            </a>
            <div className = "flex justify-around my-5 text-mauve-b w-9/12 md:w-full mx-auto">
                <a href="https://github.com/dark-faze" target="_blank">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="https://leetcode.com/akhlashussain/" target="_blank">
                    <SiLeetcode className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="https://www.linkedin.com/in/mohammed-akhlas-hussain/"target="_blank">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="https://www.instagram.com/darkfazey/"target="_blank">
                    <AiFillInstagram className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>

            <div className = 'my-5 py-4 bg-gray-200 dark:text-white dark:bg-dark-200' style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation/>
                    <span>Kolkata , India</span>
                </div>
                <p className='my-2'>akhlashussain7@gmail.com</p>
            </div>
            <button className="bg-gradient-to-r from-mauve-a to-mauve-b w-8/12 rounded-full py-2 px-5 text-white bg-black my-2 focus:outline-none" 
             onClick={()=>window.open('mailto:akhlashussain3@gmail.com')} >
                 Email Me</button>
            <button onClick={changeTheme} className="bg-gradient-to-r from-mauve-a to-mauve-b w-8/12 rounded-full py-2 px-5 text-white my-2 ">Theme</button>
        </div>
    )
}

export default Sidebar
