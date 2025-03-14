import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logo1.jpg";
import {
  FaDiscord,
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-500 dark:bg-gray-900 mt-12 px-16">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row md:justify-between">
            <div className="mb-6">
              <Link
                href="/"
                className="flex gap-2 items-center text-2xl font-bold"
              >
                <Image
                  className="rounded-full"
                  src={logo}
                  width={60}
                  height={60}
                  alt="logo"
                />
                <h2 className="text-4xl font-bold bg-gradient-to-r from-[#373840] to-orange-500 bg-clip-text text-transparent">
                  Mediquick
                </h2>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-200  font-medium">
                  <li className="mb-4">
                    <a
                      href="https://ui.shadcn.com/"
                      className="hover:underline"
                    >
                      shadcn/ui
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-200 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-200 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-200">
              © 2025{" "}
              <a href="" className="hover:underline">
                Mediquick™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex gap-8 mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-200 text-xl">
                <FaFacebook />
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-200 text-xl">
                <FaDiscord />
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-200 text-xl">
                <FaSquareXTwitter />
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-200 text-xl">
                <FaGithub />
                <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-200 text-xl">
                <FaDribbble />
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
