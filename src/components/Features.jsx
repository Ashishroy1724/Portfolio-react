import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, VisitSite, link }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <img
        src={src}
        alt={title}
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <video
        src={src}
        alt={title}
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {VisitSite && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white"
            onClick={() => window.open(link, "_blank")}
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">Visit Site</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Explore My Web Development Journey
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Dive into a curated selection of my projects,
          where creativity meets technology, offering innovative solutions and seamless user experiences across
          diverse platforms and technologies.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              Pro<b>Jects</b>
            </>
          }
          description="A showcase of my projects, where creativity meets technology to build innovative solutions and seamless user experiences across various platforms."
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/50 z-10"></div> {/* Overlay */}
          <BentoCard
            src="img/Website Image 1.png"
            title={
              <>
                <b className="text-black relative z-20">E-commerce Website</b>
              </>
            }
            description={
              <span className="text-black relative z-20">
                A cutting-edge e-commerce website featuring seamless shopping experiences.
              </span>
            }
            VisitSite
            link="https://fragranceofperfume.com/"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
        <div className="absolute inset-0 bg-white/50 z-10"></div> {/* Overlay */}
          <BentoCard
            src="img/Todolist.png"
            title={
              <>
                <b className="text-black relative z-20">To-do List</b>
              </>
            }
            description={
              <span className="text-black relative z-20">
                A to-do list website made with the help HTML, CSS, Javascript.
              </span>
            }
            VisitSite
            link="https://ashishroy1724.github.io/to-do-list.github.io/"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
        <div className="absolute inset-0 bg-white/50 z-10"></div> {/* Overlay */}
          <BentoCard
            src="img/Website Image - 4.png"
            title={
              <>
                <b className="text-black relative z-20">Money Tracker</b>
              </>
            }
            description={
              <span className="text-black relative z-20">
                An innovative app for managing finances with stunning UI/UX.
              </span>
            }
            VisitSite
            link="https://ashishroy1724.github.io/finance-manager.github.io/"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
        <div className="absolute inset-0 bg-white/50 z-10"></div> {/* Overlay */}
          <BentoCard
            src="img/Website Image - 8.png"
            title={
              <>
                <b className="text-black relative z-20">Figma Design</b>
              </>
            }
            description={
              <span className="text-black relative z-20">
                A food delivery app designed with Figma to enhance user experience.
              </span>
            }
            VisitSite
            link="https://www.figma.com/design/zssyr9XmKmsraEsLCOFcv2/Food-Delivery-App?node-id=0-1&t=FihDTXcHy9CfDA4v-1"
          />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/50 z-10"></div> {/* Overlay */}
          <BentoCard
            src="img/image.png"
            title={
              <>
                <b className="text-black relative z-20">Chat Application</b>
              </>
            }
            description={
              <span className="text-black relative z-20">
                Real time chat application made using MERN and Socket.io.
              </span>
            }
            VisitSite
            link="https://chatapp-r6u0.onrender.com/"
          />
        </BentoTilt>
        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
