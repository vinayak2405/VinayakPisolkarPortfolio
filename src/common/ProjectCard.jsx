function ProjectCard({ src, onClick, h3, p }) {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
}

export default ProjectCard;
