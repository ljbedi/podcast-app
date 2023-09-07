const Info = (podcast) => {
    return (
        <div>
            {podcast.name}
            {podcast.genres}
            {podcast.description}
        </div>

    );
}

export default Info;