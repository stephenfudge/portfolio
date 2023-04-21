export default function ProjectCard(props) {
  return (
       <div className='project-body'>
            <li className='project-list'>
                <div>
                <div className='item'>
                    <h2 className='project-name text-2xl text-bold underline'><a href={props.deployed} target="_blank" rel="noopener noreferrer">{props.title}</a></h2><br />
                    <h3 className="project-description">{props.description}</h3><br />
                    <img className='project-images' src={props.image} alt='screenshot of {project.title}'/> <br />
                    <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                    <a href={props.deployed} target="_blank" rel="noopener noreferrer"><button className="btn btn-rose mr-2">See it live!</button></a><br />
                    <a href={props.repo} target="_blank" rel="noopener noreferrer"><button className="btn btn-rose">Take a look at the GitHub Repository</button></a>
                    </div>
                    <br/><br/>
                </div>
                </div>
            </li>
        </div>
  );
}
