import NavBar from "./NavBar";

function Header(){
    return (
        <div className="w-screen bg-green-400 grid grid-col-1" >
            <p className="w-screen m-4 p-4 bg-green-500 text-4xl font-extrabold">👨🏾‍💻 MyJobs</p> 
            <NavBar/>
        </div>
    );
}

export default Header;
