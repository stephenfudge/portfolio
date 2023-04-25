export default function Skills () {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">Frontend</h3>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>Next.js</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>jQuery</li>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>TailwindCSS</li>
            <li>DaisyUI</li>
            <li>Testing - Jest</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">Backend</h3>
          <ul className="list-disc list-inside">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MVC</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>RESTful API design</li>
            <li>Authentication/Authorization</li>
            <li>Serverless Architecture</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">Other</h3>
          <ul className="list-disc list-inside">
            <li>Git (including GitHub)</li>
            <li>Webpack/Babel</li>
            <li>Agile Development</li>
            <li>DevOps</li>
            <li>Project Management</li>
            <li>Communication Skills</li>
            <li>Problem Solving</li>
            <li>Heroku/Vercel or other hosting platforms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};