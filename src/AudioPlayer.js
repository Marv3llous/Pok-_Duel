const AudioPlayer = () => {
    return (
        <div>
            <audio controls autoPlay>
                <source src="PokemonMusic.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AudioPlayer;
