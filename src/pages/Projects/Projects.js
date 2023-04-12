export default function ProjectCard(props) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl py-3">
      <figure>
        <img src={props.image} alt={props.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.technologies}</p>
        <div className="card-actions justify-end">
          <a href={props.repo} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">Repository</button>
          </a>
        </div>
        <div className="card-actions justify-start">
          <a href={props.deployed} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">Deployed</button>
          </a>
        </div>
      </div>
    </div>
  );
}
