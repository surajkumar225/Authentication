"use client";
// import axios from "axios";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../navbar/page";
import { FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white shadow-md rounded px-8 pt-6">
        <h1 className="text-5xl mb-4 text-center mt-4 text-black">
          Welcome to the <strong className="font-bold">LMS</strong> portal
        </h1>
        <p className="text-md mb-4 text-center ">
          As a capacity building tool, LMS facilitates efficient administration
          of e-learning by leveraging IT as a growth engine.
          <br />
          You can view and manage your account information.
        </p>

        <div className="flex items-center justify-center">
          <button className="bg-orange-500 text-xl mb-4 text-center font-bold text-white  px-4 py-2 rounded mt-4 hover:bg-orange-600 ">
            <Link href="/dashboard">Get Started</Link>
          </button>
        </div>
    <div className="mt-8">
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="bg-green-50 text-black shadow-md rounded-full px-8 pt-6 pb-8 mb-4 max-w-sm">
            <h2 className="text-xl mb-2 text-center text-green-600 font-sans">
              Flexible Learning
            </h2>
            <p className="text-md mb-4 font-sans">
              NeGD LMS is a single scalable web-based platform for diverse
              learning needs allowing learners to access anytime and from
              anywhere, independent of browser or device.
            </p>
          </div>

          <div className="bg-yellow-50 text-black shadow-md rounded-full px-8 pt-6 pb-8 mb-4 max-w-sm">
            <h2 className="text-xl mb-2 text-center text-green-600 font-sans">
              E-Learning as a Service
            </h2>
            <p className="text-md mb-4 font-sans">
              NeGD offers e-Learning as a Service (eLaS) to Government
              departments with latest e-Content modules and state-of-art studio
              facility available free of cost.
            </p>
          </div>

          <div className="bg-blue-50 text-black shadow-md rounded-full px-8 pt-6 pb-8 mb-4 max-w-sm">
            <h2 className="text-xl mb-2 text-center text-green-600 font-sans">
              Blended Trainings
            </h2>
            <p className="text-md mb-4 font-sans">
              NeGD LMS facilitates ‘Blended training’ for its learners providing
              hybrid learning with technology-based virtual classrooms and
              traditional classroom trainings.
            </p>
          </div>

       
        <div className="shadow-md bg-white px-8 pt-6 max-lg">
        <h2 className="text-4xl mb-9 mt-8 text-center text-black">Discover what you can do with TalentLMS</h2>
        <div className="image-slider-container overflow-scroll">
            {/* Images */}
            <div className="image-slide">
                <img src="https://mbimybigidea.com/wp-content/uploads/2022/07/6-REASONS-WHY-EMPLOYEE-TRAINING-BENEFITS-THE-COMPANY-scaled.jpg" alt="Image 1" className="max-w-full h-auto" />
                <h2 className="flex text-center justify-center text-lg font-semibold">Employee training</h2>
            </div>
            <div className="image-slide">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-rTmGQMyUTYBv9KIjvhPUzX3S_lBfBVFtyw&s" alt="Image 1" className="rounded-lg max-w-full h-auto" />
                <h2 className="flex text-center justify-center text-lg font-semibold">Compliance training</h2>
            </div>
            <div className="image-slide">
                <img src="https://cdn.prod.website-files.com/61aa482275701e722856da7b/61ba5635364b19a3278dcd2f_training%20vs%20onboarding.jpg" alt="Image 1" className="rounded-lg max-w-full h-auto" />
                <h2 className="flex text-center justify-center text-lg font-semibold">Onboarding training</h2>
            </div>
            <div className="image-slide">
                <img src="https://news.blr.com/app/uploads/sites/3/2020/04/video-meeting-1.jpg" alt="Image 1" className="rounded-lg max-w-full h-auto" />
                <h2 className="flex text-center justify-center text-lg font-semibold">Remote workforce training</h2>
            </div>
           
        </div>
    </div>

          </div>        
        </div>
        
      </div>
    <footer className="bg-white text-black py-4 pl-14">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="flex justify-start space-x-8 items-center">
          <Link href="/help-center" className="hover:underline">Help Center</Link>
          <Link href="/faq" className="hover:underline">FAQ</Link>
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/security" className="hover:underline">Security</Link>
          <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
        </div>
        <div className="flex justify-end space-x-5 items-center pr-16">
          <Link href="https://www.linkedin.com" target="_blank" className="hover:text-blue-500">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-cyan-400">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://www.youtube.com" target="_blank" className="hover:text-red-600">
            <FaYoutube size={24} />
          </Link>
          <Link href="https://www.facebook.com" target="_blank" className="hover:text-blue-700">
            <FaFacebook size={24} />
          </Link>
        </div>
      </div>
    </footer>
         
    </div>

  );
};

export default Profile;
