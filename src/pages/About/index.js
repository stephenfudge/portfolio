import "./about.css";

export default function About() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <img
        src="./images/stephen.png"
        alt="Stephen Fudge profile pic"
        className="w-full object-cover col-span-1 flex items-center justify-center my-5"
        id="image"
      />
      <div className="col-span-1 flex items-center justify-center">
        <p className="text-center mr-9 pr-9">
          Hey hey, I'm Stephen Fudge a talented and experienced software
          developer with a Full Stack Web Development Certificate from the
          University of Toronto. I have a strong background in technical
          programming and proficiency in a range of technologies, including
          HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB, SQL. My ability to
          teach and support others is evident from my experience as an Assistant
          Instructor with 2U, where I provided guidance and instructional
          support to up to 40+ students. I am also skilled in managing teams,
          conducting interviews, and mentoring employees. My technical
          expertise, combined with my dedication to delivering exceptional
          customer service, make me an ideal candidate for a software
          development role.
        </p>
      </div>
    </div>
  );
}
