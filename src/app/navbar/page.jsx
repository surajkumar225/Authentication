import axios from "axios";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const handleLogout = async () => {
        const response = await axios.get('/api/users/logout');

        if (response.status === 200) {
            router.push('/login');
        }
    }

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <span className="text-white hover:text-gray-300">Home</span>
                    <span className="text-white hover:text-gray-300">About</span>
                </div>
                <div>
                    <button className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
