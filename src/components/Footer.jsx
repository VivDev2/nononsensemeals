const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-orange-900 to-orange-950 text-white ">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                className="h-32 w-auto mr-4"
                src="src/assets/Nononsense.png"
                alt="No Nonsense Meals Logo"
              />
              <div>
                <h2 className="text-3xl font-bold text-orange-100">
                  No Nonsense Meals
                </h2>
                <p className="text-orange-300 text-lg font-medium">
                  RIGHT EATING, NO NONSENSE.
                </p>
              </div>
            </div>
            <p className="text-orange-200 text-lg leading-relaxed mb-6">
              Experience authentic flavors and fresh ingredients in every bite. 
              We're committed to serving quality meals that satisfy your cravings 
              without the fuss.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-orange-800 hover:bg-orange-700 p-3 rounded-full transition duration-300 transform hover:scale-110">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="bg-orange-800 hover:bg-orange-700 p-3 rounded-full transition duration-300 transform hover:scale-110">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="bg-orange-800 hover:bg-orange-700 p-3 rounded-full transition duration-300 transform hover:scale-110">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-orange-100 mb-6 border-b-2 border-orange-700 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-orange-200 hover:text-orange-100 transition duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 group-hover:bg-orange-400 transition duration-300"></span>
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-200 hover:text-orange-100 transition duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 group-hover:bg-orange-400 transition duration-300"></span>
                  Make Reservation
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-200 hover:text-orange-100 transition duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 group-hover:bg-orange-400 transition duration-300"></span>
                  Order Online
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-200 hover:text-orange-100 transition duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 group-hover:bg-orange-400 transition duration-300"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-200 hover:text-orange-100 transition duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 group-hover:bg-orange-400 transition duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-xl font-bold text-orange-100 mb-6 border-b-2 border-orange-700 pb-2 inline-block">
              Visit Us
            </h3>
            
            {/* Contact Info */}
            <div className="mb-6">
              <div className="flex items-start mb-3">
                <svg className="h-5 w-5 text-orange-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-orange-200">CTS-7879, Connaught place, SHOP NO-1,RAJ SARTHI </p>
                  <p className="text-orange-200">Chhatrapati Sambhajinagar, Maharashtra 431001</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                <svg className="h-5 w-5 text-orange-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p className="text-orange-200">093098 07509</p>
              </div>
              
              <div className="flex items-center">
                <svg className="h-5 w-5 text-orange-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p className="text-orange-200">hello@nononsensemeals.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-orange-800/30 rounded-lg p-4">
              <h4 className="font-semibold text-orange-100 mb-3 flex items-center">
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Opening Hours
              </h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-orange-200">Mon - Fri</span>
                  <span className="text-orange-100">11am - 10pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-200">Saturday</span>
                  <span className="text-orange-100">10am - 11pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-200">Sunday</span>
                  <span className="text-orange-100">10am - 9pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-orange-950/50 border-t border-orange-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-orange-300 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} No Nonsense Meals. All rights reserved. | 
                <a
                  href="https://leafnywebpack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-orange-400 hover:text-orange-100 underline decoration-dotted underline-offset-4 transition duration-300"
                >
                  Crafted by Leafny Webpack
                </a>
            </p>

            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-orange-300 hover:text-orange-100 transition duration-300">Privacy Policy</a>
              <a href="#" className="text-orange-300 hover:text-orange-100 transition duration-300">Terms of Service</a>
              <a href="#" className="text-orange-300 hover:text-orange-100 transition duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;