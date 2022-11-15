export const Footer = () => {
  return (
    <footer className="p-4 md:px-6 md:py-8 bg-app-white text-app-text border-t border-gray-200 text-center">
      <div>
        <ul className="flex flex-row justify-center lg:justify-end">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <hr className="my-6 border-brand/70 sm:mx-auto lg:my-8" />

      <div>
        <span className="block text-sm text-center lg:text-end">
          © {new Date().getFullYear()}{" "}
          <a href="/" className="hover:underline">
            RealtyMyWay.com
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
