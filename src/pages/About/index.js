import { useWindowSize } from "react-use";

export default function About({isDark}) {
  const { width } = useWindowSize();
  const imageWidth = width < 768 ? "w-2/3" : "w-5/8";

  return (
    <div className="container mx-auto px-4 md:px-10" data-testid="about-section">
    <div className="grid grid-cols-1 gap-2 py-14 md:grid-cols-2">
      {width < 768 ? (
        <div className="flex items-center justify-center">
          <img
            src="./images/stephen.png"
            alt="Stephen Fudge profile pic"
            className={`object-cover my-5 rounded-full ${imageWidth}`}
          />
        </div>
      ) : (
        <div className="col-span-1 flex items-center justify-center">
          <img
            src="./images/stephen.png"
            alt="Stephen Fudge profile pic"
            className={`object-cover col-span-1 my-5 rounded-full ${imageWidth}`}
          />
        </div>
      )}
      <div className="col-span-1 flex items-center justify-center">
        <div className="text-center ">
          <p className="flex items-center justify-center h-full">
            Hey hey, I'm Stephen Fudge a talented and experienced software
            developer with a Full Stack Web Development Certificate from the
            University of Toronto. I have a strong background in technical
            programming and proficiency in a range of technologies, including
            HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB, SQL. My ability to
            teach and support others is evident from my experience as an
            Assistant Instructor with 2U, where I provided guidance and
            instructional support to up to 40+ students. I am also skilled in
            managing teams, conducting interviews, and mentoring employees. My
            technical expertise, combined with my dedication to delivering
            exceptional customer service, make me an ideal candidate for a
            software development role.
          </p>
        </div>
      </div>
    </div>
  </div>
);
}