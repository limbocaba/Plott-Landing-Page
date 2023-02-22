import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className=" max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className=" w-full text-3xl font-bold text-[#00df9a]">PLOTT.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque eum blanditiis, sunt reiciendis debitis numquam repellat quae ea molestias nobis a, quidem dolore omnis? Doloremque et autem doloribus perspiciatis placeat.</p>
        <div className=" flex md:w-[75%] my-6 justify-between">
          <FaFacebookSquare className=" cursor-pointer hover:text-white" size={30} />
          <FaInstagram className=" cursor-pointer hover:text-white" size={30} />
          <FaTwitterSquare className=" cursor-pointer hover:text-white" size={30} />
          <FaGithubSquare className=" cursor-pointer hover:text-white" size={30} />
          <FaDribbbleSquare className=" cursor-pointer hover:text-white" size={30} />
        </div>
      </div>
      <div className=" lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className=" font-medium text-gray-400 cursor-pointer hover:text-[#00df9a]">Solutions</h6>
          <ul>
            <li className=" py-2 text-sm cursor-pointer hover:text-white">Analytics</li>
            <li className=" py-2 text-sm cursor-pointer hover:text-white">Marketing</li>
            <li className=" py-2 text-sm cursor-pointer hover:text-white">Commerce</li>
            <li className=" py-2 text-sm cursor-pointer hover:text-white">Insights</li>
          </ul>
        </div>

        <div>
          <h6 className=" font-medium text-gray-400 cursor-pointer hover:text-[#00df9a]">Support</h6>
          <ul>
            <li className=" py-2 text-sm cursor-pointer hover:text-white">Pricing</li>
            <li className=" py-2 text-sm cursor-pointer hover:text-white">Documentation</li>
            <li className=" py-2 text-sm cursor-pointer hover:text-white">Guides</li>
            <li className=" py-2 text-sm cursor-pointer hover:text-white">API Status</li>
          </ul>
        </div>

        <div>
          <h6 className=" font-medium text-gray-400 cursor-pointer hover:text-[#00df9a]">Company</h6>
          <ul>
            <li className=" py-2 text-sm cursor-pointer hover:text-white">About</li>
            <li className=" py-2 text-sm cursor-pointer hover:text-white">Blog</li>
            <li className=" py-2 text-sm cursor-pointer hover:text-white">Careers</li>
            <li className=" py-2 text-sm cursor-pointer hover:text-white">Press</li>
          </ul>
        </div>

        <div>
          <h6 className=" font-medium text-gray-400 cursor-pointer hover:text-[#00df9a]">Legal</h6>
          <ul>
            <li className=" py-2 text-sm cursor-pointer hover:text-white">Claim</li>
            <li className=" py-2 text-sm cursor-pointer hover:text-white">Policy</li>
            <li className=" py-2 text-sm cursor-pointer hover:text-white">Terms and Conditions</li>
            <li className=" py-2 text-sm cursor-pointer hover:text-white">Privacy Policy</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Footer;
