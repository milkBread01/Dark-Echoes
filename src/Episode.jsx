const Episode = ({id, title, description, setSelectedEpisode}) => {
    return (
        <div className = "episode">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick ={ () => setSelectedEpisode(null)}>Exit View</button>
        </div>
    );
};

export default Episode;