// components/Footer.jsx
export default function Footer() {
    return (
      <footer id="contact" className="bg-zinc-900 text-white py-10 px-6 md:px-20 mt-20">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h3 className="text-2xl font-bold">Get in Touch</h3>
          <p className="text-gray-400">
            Feel free to reach out for collaborations or just a friendly hello 👋
          </p>
  
          <div className="space-y-1 text-sm text-gray-300">
            <p>Email: <a href="mailto:joshipalash80@gmail.com" className="text-blue-400 hover:underline">joshipalash80@gmail.com</a></p>
            <p>Phone: <a href="tel:+91 7709019804" className="hover:underline">+91 77090 19804</a></p>
            <p>Location:Pune,India</p>
          </div>
  
          <div className="mt-6 text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Palash . All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  