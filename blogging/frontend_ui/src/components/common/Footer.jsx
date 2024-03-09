import { Footer as FFooter } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter
} from "react-icons/bs";
import { Link } from "react-router-dom";
const  Footer = () => {
  return (
    <FFooter container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Charles's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FFooter.Title title="About" />
              <FFooter.LinkGroup col>
                <FFooter.Link
                  href="https://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Projects
                </FFooter.Link>
                <FFooter.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Charles's Blog
                </FFooter.Link>
              </FFooter.LinkGroup>
            </div>
            <div>
              <FFooter.Title title="Follow us" />
              <FFooter.LinkGroup col>
                <FFooter.Link
                  href="https://www.github.com/TabotCharlesBessong"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </FFooter.Link>
                <FFooter.Link href="https://www.youtube.com/channel/UC_SXSdMEY_sMNVbj7gQ4t7A">
                  Youtube
                </FFooter.Link>
              </FFooter.LinkGroup>
            </div>
            <div>
              <FFooter.Title title="Legal" />
              <FFooter.LinkGroup col>
                <FFooter.Link href="#">Privacy Policy</FFooter.Link>
                <FFooter.Link href="#">Terms &amp; Conditions</FFooter.Link>
              </FFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FFooter.Copyright
            href="#"
            by="Charles's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <FFooter.Icon
              href="https://web.facebook.com/CharlesBessongTabot"
              icon={BsFacebook}
            />
            <FFooter.Icon
              href="https://www.instagram.com/tabotcharles/?hl=en"
              icon={BsInstagram}
            />
            <FFooter.Icon
              href="https://twitter.com/CharlesTabot"
              icon={BsTwitter}
            />
            <FFooter.Icon
              href="https://github.com/TabotCharlesBessong"
              icon={BsGithub}
            />
            <FFooter.Icon
              href="https://www.linkedin.com/in/tabot-charles-bessong-2b0459221/"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </FFooter>
  );
}

export default Footer
