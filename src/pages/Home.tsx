import { Logo } from "../components/ui/Logo";
import { Link, NavLink } from "react-router-dom";
import speakers from "../assets/pt-reporters-speaker.png";
import manWithReorter from "../assets/pt-man-with-reporter.png";
import cameraMan from "../assets/pt-camera-man.png";
import unilorinLogo from "../assets/pt-unilorin-logo.png";
import timesLogo from "../assets/pt-times-logo.png";
import dubawaLogo from "../assets/pt-dubawa-logo.png";
import cjidLogo from "../assets/pt-cjid-logo.png";
import threeHeads from "../assets/pt-three-heads.png";
import frameEsther from "../assets/pt-frame-esther.png";
import frameProgress from "../assets/pt-frame-progress.png";
import bookImage from "../assets/pt-books.png";
import noteImage from "../assets/pt-note.png";
// import { Slider } from "../components/ui/Slider";
const StartForFreeButton = () => {
  return (
    <button
      className=" tw-mt-6 tw-rounded-[32px] tw-bg-primary tw-p-3 tw-pl-6 tw-flex tw-gap-2 tw-text-[23px] tw-text-white tw-w-full tw-items-center tw-capitalize tw-max-w-[239px] "
      type="button"
    >
      Start for free
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM14.79 12.53L11.26 16.06C11.11 16.21 10.92 16.28 10.73 16.28C10.54 16.28 10.35 16.21 10.2 16.06C9.91 15.77 9.91 15.29 10.2 15L13.2 12L10.2 9C9.91 8.71 9.91 8.23 10.2 7.94C10.49 7.65 10.97 7.65 11.26 7.94L14.79 11.47C15.09 11.76 15.09 12.24 14.79 12.53Z"
            fill="white"
          />
        </svg>
      </span>
    </button>
  );
};
const Home = () => {
  const navClass = ({ isActive }: { isActive: boolean }) => {
    const common =
      "tw-text-[23px] tw-font-normal tw-capitalize tw-leading-[140%] ";
    if (isActive) {
      return `${common} tw-text-dark-purple`;
    }
    return `${common} tw-text-[#5F5D61]`;
  };
  return (
    <>
      <header className=" tw-fixed tw-top-0 tw-w-full tw-left-0  tw-bg-white tw-py-12 ">
        <div className="wrapper  tw-px-[140px] tw-flex tw-items-center tw-justify-between ">
          <Logo />
          <nav className="tw-flex tw-gap-12 tw-items-center tw-justify-center">
            <NavLink to="/" className={(a) => navClass(a)}>
              Home
            </NavLink>
            <NavLink to="/contact" className={(a) => navClass(a)}>
              Courses
            </NavLink>
            <NavLink to="/login" className={(a) => navClass(a)}>
              About us
            </NavLink>
          </nav>
          <Link
            to="/login"
            className="tw-text-primary tw-capitalize flex tw-px-8 tw-py-4 tw-items-center tw-justify-center tw-rounded-[32px] tw-border  tw-border-light-gray tw-text-[23px] tw-font-normal tw-leading-[140%] "
          >
            Login Your Account
          </Link>
        </div>
      </header>

      <section className="tw-mt-[286px]  tw-w-full">
        <div className="wrapper tw-flex tw-gap-6 tw-items-start">
          <div className="tw-w-[70%]">
            <div className="tw-text-primary tw-capitalize flex tw-px-8 tw-py-4 tw-items-center tw-justify-center tw-rounded-[32px] tw-border-[2px] tw-w-fit tw-border-light-gray tw-text-[23px] tw-font-normal tw-leading-[140%] ">
              #1 journalism academy
            </div>
            <h2 className="tw-text-dark-purple tw-capitalize tw-text-[60px] tw-font-normal   ">
              Bridging the Gap in Journalism Education
            </h2>
          </div>
          <div className="tw-flex tw-flex-col tw-gap-6">
            <p className="tw-max-w-[491px] tw-text-[#969696] tw-leading-[140%] tw-text-[23px] tw-font-normal  ">
              In a rapidly evolving world, journalism stands at the forefront of
              change. At PT Academy, we're not just bridging that gap; we're
              revolutionizing it.
            </p>
            <StartForFreeButton />
          </div>
        </div>
      </section>
      <section className="tw-mt-[123px] tw-w-full  ">
        <div className="wrapper tw-flex tw-gap-12 tw-items-baseline tw-h-[620px] ">
          <div className="tw-w-full tw-h-[calc(100%-100px)] tw-flex tw-flex-col">
            <img
              src={speakers}
              alt="Speakers"
              className="tw-w-full tw-h-full tw-object-cover"
            />
          </div>
          <div className="tw-w-full tw-h-full tw-flex tw-flex-col">
            <img
              src={manWithReorter}
              alt="Man with Reporter"
              className="tw-w-full tw-h-full tw-object-cover"
            />
          </div>
          <div className="tw-w-full tw-h-[calc(100%-100px)] tw-flex tw-flex-col">
            <img
              src={cameraMan}
              alt="Camera Man"
              className="tw-w-full tw-h-full tw-object-cover "
            />
          </div>
        </div>
      </section>
      <article className="tw-mt-[205px] ">
        <div className="wrapper marquee ">
          <div className="marquee-content tw-flex tw-gap-10 tw-items-center ">
            <img
              src={unilorinLogo}
              alt="Unilorin Logo"
              className="tw-w-[200px] tw-h-[100px] tw-object-contain"
            />
            <img
              src={timesLogo}
              alt="Times Logo"
              className="tw-w-[200px] tw-h-[100px] tw-object-contain"
            />
            <img
              src={dubawaLogo}
              alt="Dubawa Logo"
              className="tw-w-[200px] tw-h-[100px] tw-object-contain"
            />
            <img
              src={cjidLogo}
              alt="CJID Logo"
              className="tw-w-[200px] tw-h-[100px] tw-object-contain"
            />
          </div>
        </div>
      </article>
      <section className="tw-mt-[123px] tw-w-full  ">
        <div className="wrapper tw-gap-10 tw-flex">
          <div className="tw-w-[50%] tw-flex tw-flex-col tw-px-12 tw-py-14 tw-gap-6 tw-rounded-3xl tw-bg-[#fafafa] tw-h-[762px] tw-mt-24 ">
            <div className=" bg-insight tw-py-12 tw-h-full tw-w-full tw-rounded-3xl ">
              <h6 className="tw-px-12 tw-text-[33px] tw-leading-[140%] tw-font-bold tw-text-[#fafafa] tw-capitalize ">
                insightful overview
              </h6>
              <div className=" tw-inline-flex tw-flex-col tw-mt-6 tw-gap-2 tw-items-start tw-px-12">
                <div className="tw-flex tw-items-center tw-gap-6 ">
                  <img
                    src={threeHeads}
                    alt="Three Heads"
                    className="tw-w-[158px] tw-h-[80px] tw-object-cover"
                  />
                  <p className="tw-text-[#fafafa] tw-font-bold tw-text-[23px] tw-leading-[140%]">
                    +5.7k
                  </p>
                </div>
                <p className="tw-text-[#f0f0f0] tw-font-normal tw-text-[33px] tw-capitalize tw-leading-[140%]">
                  monthly visitors
                </p>
              </div>
              <div className="tw-relative tw-h-[178px] tw-flex tw-items-center tw-gap-6 tw-w-full tw-mt-6">
                <div className="tw-absolute -tw-left-20 tw-z-10 tw-top-0 tw-h-[178px] tw-w-[144px] ">
                  <img
                    src={frameEsther}
                    alt="Frame Esther"
                    className="tw-w-full tw-h-full tw-object-cover"
                  />
                </div>
                <div className="tw-h-[127px] tw-w-[440px]  -tw-right-20 tw-absolute ">
                  <img
                    src={frameProgress}
                    alt="Frame Progress"
                    className="tw-w-full tw-h-full tw-object-cover"
                  />
                </div>
              </div>
              <p className=" tw-text-[#fafafa] tw-text-base tw-px-12 tw-capitalize tw-leading-[140%] tw-font-normal ">
                The Academy aims to collaborate with institutions in West Africa
                to offer specialised programmes relating to journalism.
              </p>
              <div className="tw-flex tw-items-center tw-gap-6 tw-mt-4 tw-px-12 ">
                <img
                  src={threeHeads}
                  alt="Three Heads"
                  className="tw-w-[88px] tw-h-[32px] tw-object-cover"
                />
                <p className="tw-text-[#fafafa] tw-font-normal tw-text-[23px] tw-leading-[140%]">
                  +5.7k trained journalists
                </p>
              </div>
            </div>
          </div>
          <div className="tw-w-[50%] tw-flex tw-flex-col tw-gap-6 tw-mt-0">
            <h4 className=" tw-text-dark-purple tw-font-bold tw-leading-[140%] tw-text-5xl">
              Unlock your potential with PT academy
            </h4>
            <ul className="tw-flex tw-gap-6 tw-mt-8 tw-flex-col ">
              <li className="tw-text-[#969696] tw-font-normal tw-text-[23px] tw-leading-[140%] ">
                The PT Academy aims to create a comprehensive, specialised, and
                up-to-date knowledge platform for journalists, particularly in
                Nigeria, focusing on five primary tracks.
              </li>
              <li className="tw-flex tw-flex-col tw-gap-2">
                <div className="tw-flex tw-items-center tw-gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M28.7467 14.3198L26.9333 12.2131C26.5867 11.8131 26.3067 11.0664 26.3067 10.5331V8.26642C26.3067 6.85309 25.1467 5.69309 23.7333 5.69309H21.4667C20.9467 5.69309 20.1867 5.41309 19.7867 5.06642L17.68 3.25309C16.76 2.46642 15.2533 2.46642 14.32 3.25309L12.2267 5.07975C11.8267 5.41309 11.0667 5.69309 10.5467 5.69309H8.24001C6.82667 5.69309 5.66667 6.85309 5.66667 8.26642V10.5464C5.66667 11.0664 5.38667 11.8131 5.05334 12.2131L3.25334 14.3331C2.48001 15.2531 2.48001 16.7464 3.25334 17.6664L5.05334 19.7864C5.38667 20.1864 5.66667 20.9331 5.66667 21.4531V23.7331C5.66667 25.1464 6.82667 26.3064 8.24001 26.3064H10.5467C11.0667 26.3064 11.8267 26.5864 12.2267 26.9331L14.3333 28.7464C15.2533 29.5331 16.76 29.5331 17.6933 28.7464L19.8 26.9331C20.2 26.5864 20.9467 26.3064 21.48 26.3064H23.7467C25.16 26.3064 26.32 25.1464 26.32 23.7331V21.4664C26.32 20.9464 26.6 20.1864 26.9467 19.7864L28.76 17.6798C29.5333 16.7598 29.5333 15.2398 28.7467 14.3198ZM21.5467 13.4798L15.1067 19.9198C14.92 20.1064 14.6667 20.2131 14.4 20.2131C14.1333 20.2131 13.88 20.1064 13.6933 19.9198L10.4667 16.6931C10.08 16.3064 10.08 15.6664 10.4667 15.2798C10.8533 14.8931 11.4933 14.8931 11.88 15.2798L14.4 17.7998L20.1333 12.0664C20.52 11.6798 21.16 11.6798 21.5467 12.0664C21.9333 12.4531 21.9333 13.0931 21.5467 13.4798Z"
                        fill="#782DF3"
                      />
                    </svg>
                  </span>
                  <span className="tw-text-dark-purple tw-font-bold tw-text-[23px] tw-leading-[140%]">
                    professional courses/live classes
                  </span>
                </div>
                <p className="tw-text-[#969696] tw-font-normal tw-text-[23px] tw-leading-[140%]">
                  Journalism isn't confined to the printed page—it's a dynamic
                  force shaping narratives across technological, societal, and
                  political landscapes. Our mission is clear: to equip
                  journalists with the skills, insights, and adaptability
                  necessary for navigating the ever-shifting currents of the
                  industry.
                </p>
              </li>
              <li className="tw-flex tw-flex-col tw-gap-2">
                <div className="tw-flex tw-items-center tw-gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M22.4401 20.8535C23.3334 20.2669 24.5067 20.9069 24.5067 21.9735V23.6935C24.5067 25.3869 23.1867 27.2002 21.6001 27.7335L17.3467 29.1469C16.6001 29.4002 15.3867 29.4002 14.6534 29.1469L10.4001 27.7335C8.80008 27.2002 7.49341 25.3869 7.49341 23.6935V21.9602C7.49341 20.9069 8.66674 20.2669 9.54674 20.8402L12.2934 22.6269C13.3467 23.3335 14.6801 23.6802 16.0134 23.6802C17.3467 23.6802 18.6801 23.3335 19.7334 22.6269L22.4401 20.8535Z"
                        fill="#782DF3"
                      />
                      <path
                        d="M26.64 8.61309L18.6534 3.37309C17.2134 2.42642 14.84 2.42642 13.4 3.37309L5.37336 8.61309C2.80003 10.2798 2.80003 14.0531 5.37336 15.7331L7.50669 17.1198L13.4 20.9598C14.84 21.9064 17.2134 21.9064 18.6534 20.9598L24.5067 17.1198L26.3334 15.9198V19.9998C26.3334 20.5464 26.7867 20.9998 27.3334 20.9998C27.88 20.9998 28.3334 20.5464 28.3334 19.9998V13.4398C28.8667 11.7198 28.32 9.71975 26.64 8.61309Z"
                        fill="#782DF3"
                      />
                    </svg>
                  </span>
                  <span className="tw-text-dark-purple tw-font-bold tw-text-[23px] tw-leading-[140%]">
                    certification
                  </span>
                </div>
                <p className="tw-text-[#969696] tw-font-normal tw-text-[23px] tw-leading-[140%]">
                  Your journey to advanced degrees in journalism starts with PT
                  Academy. We are excited to collaborate with esteemed
                  universities such as the University of Ilorin to provide
                  innovative certifications and advanced degrees.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className=" tw-mt-[300px]  ">
        <div className="wrapper tw-flex tw-flex-col tw-gap-6 tw-items-center ">
          <div className=" tw-flex tw-justify-between tw-gap-4 tw-w-full tw-mb-12 ">
          <div className="tw-text-dark-purple tw-flex tw-basis-[55%] tw-gap-6 tw-font-bold tw-text-[48px] tw-items-center tw-leading-[140%] tw-capitalize ">
            <div className="tw-bg-primary tw-rounded-3xl tw-w-1.5 tw-h-[108px] "></div>{" "}
            explore our specially prepared tracks
          </div>
          <p className=" tw-font-normal tw-w-[40%] tw-text-[23px] tw-leading-[140%] tw-text-[#969696]  ">
            The Academy aims to collaborate with institutions in West Africa to
            offer specialised programmes relating to journalism.
          </p>
        </div>
          {/* <Slider /> */}
        </div>
      
        
      </section>
      <section className="tw-mt-[123px]">
         <div className="wrapper tw-flex tw-flex-col tw-gap-6 tw-items-center ">
          <div className=" tw-flex tw-justify-between tw-gap-4 tw-w-full tw-mb-12 ">
          <div className="tw-text-dark-purple tw-flex tw-basis-[55%] tw-gap-6 tw-font-bold tw-text-[48px] tw-items-center tw-leading-[140%] tw-capitalize ">
            <div className="tw-bg-primary tw-rounded-3xl tw-w-1.5 tw-h-[108px] "></div>{" "}
            what our platform includes
          </div>
          <p className=" tw-font-normal tw-w-[40%] tw-text-[23px] tw-leading-[140%] tw-text-[#969696]">
            We Take Pride In Offering A Comprehensive Suite of Services to Elevate Your Learning Experience.
          </p>
        </div>
        <h3 className=" tw-text-dark-purple tw-text-5xl tw-leading-[140%] tw-text-center tw-mt-[123px] tw-capitalize tw-font-bold " >pre - recorded classes</h3>
        <p className=" tw-text-[#5F5D61] tw-text-center tw-leading-[140%] tw-font-normal tw-text-[23px] " >At PT Academy, we understand that a seamless learning experience is key to your success. That's why we've designed a user-friendly and interactive student dashboard that puts you in control of your educational journey.</p>
        <article className="tw-mt-[123px] tw-flex tw-gap-8 tw-justify-between " >
<div className="tw-w" >
  <div className="tw-relative tw-bg-light-gray tw-h-[498px] tw-w-full tw-w-max-[632px] tw-rounded-tl-3xl tw-rounded-tr-3xl ">
    <img src={bookImage} alt="Book" className="tw-w-full tw-h-full tw-object-cover" />
  </div>
</div>
<div className="tw-w" >
  <div className="tw-relative tw-bg-light-gray tw-h-[498px] tw-w-full tw-w-max-[632px] tw-rounded-tl-3xl tw-rounded-tr-3xl ">
    <img src={noteImage} alt="Book" className="tw-w-full tw-h-full tw-object-cover" />
  </div>
</div>
        </article>
        </div>
      </section>
      <footer className=" !tw-py-[60px] tw-bg-dark-purple tw-w-full tw-px-[150px]  ">
        <div className="wrapper tw-flex tw-flex-col ">
          <div className=" tw-flex tw-mx-[10%] tw-w-[calc(100%_-_20%)] tw-justify-between " >
            <div className=" tw-mt-[29px] tw-flex tw-flex-col  tw-basis-[35%] ">
              <p className=" tw-flex tw-flex-col tw-gap-8 tw-text-white tw-font-normal tw-text-[23px] tw-leading-[140%]">
                Ready to get started?
              </p>
              <StartForFreeButton />
            </div>
            <div className="tw-flex tw-basis-[45%] tw-justify-between ">
              <div className="tw-flex tw-flex-col tw-gap-2.5">
              <p className=" tw-text-primary tw-text-[23px] tw-leading-[140%] tw-font-normal  ">
                Services
              </p>
              <ul className=" tw-flex tw-flex-col tw-gap-[13px] ">
                {[
                  { title: "Courses", link: "#" },
                  { title: "Campaigns", link: "#" },
                  { title: "Branding", link: "#" },
                  { title: "Offline", link: "#" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className=" tw-text-white tw-text-[19px] tw-leading-[140%] tw-font-normal  "
                  >
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tw-flex tw-flex-col tw-gap-2.5">
              <p className=" tw-text-primary tw-text-[23px] tw-leading-[140%] tw-font-normal  ">
                About
              </p>
              <ul className=" tw-flex tw-flex-col tw-gap-[13px] ">
                {[
                  { title: "Our story", link: "#" },
                  { title: "Benefits", link: "#" },
                  { title: "Team", link: "#" },
                  { title: "Careers", link: "#" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className=" tw-text-white tw-text-[19px] tw-leading-[140%] tw-font-normal  "
                  >
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            </div>
            <div className="tw-flex tw-flex-col tw-gap-2.5">
              <p className=" tw-text-primary tw-text-[23px] tw-leading-[140%] tw-font-normal  ">
                Help
              </p>
              <ul className=" tw-flex tw-flex-col tw-gap-[13px] ">
                {[
                  { title: "FAQ", link: "#" },
                  { title: "Contact", link: "#" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className=" tw-text-white tw-text-[19px] tw-leading-[140%] tw-font-normal  "
                  >
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </footer>
    </>
  );
};
export default Home;
