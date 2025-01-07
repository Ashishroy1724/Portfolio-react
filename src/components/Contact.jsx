import AnimatedTitle from "./AnimatedTitle";
import { FaLinkedin } from 'react-icons/fa';  // Import LinkedIn icon

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const handleContactClick = () => {
  window.open("https://www.linkedin.com/in/ashishroy0524/", "_blank");
};

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/aboutme.jpg"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/aboutme.jpg"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
        
          <ImageClipBox
            src="/img/contact.jpg"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">Join ME</p>

          <AnimatedTitle
            title="Shaping <b>tomorrow</b> with <br /> <b>innovation</b>."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          {/* LinkedIn icon with click event */}
          <div 
            onClick={handleContactClick}  // LinkedIn redirect on click
            className="mt-10 cursor-pointer p-2 rounded-full bg-violet-50 text-black"
          >
            <FaLinkedin size={45} color="blue" />  {/* Adjust size to your preference */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
