function SlotMachine(props) {
    // Destructure our props
    const {s1, s2, s3} = props;

    // This is our 'Winner' condition, we only need 2 conditions because of transitivity
    const winner = (s1 === s2) && (s2 === s3);

    // If the RNG is of a certain value, then return a specific emoji
    const emojiMaker = (input) => {
        if (input === 1) {
            return <span>🍇</span>
        } else if (input === 2) {
            return <span>🍋</span>
        } else if (input === 3) {
            return <span>🍍</span>
        }
    }

    // Here we also experiment with conditional CSS
    return(
        <div className={winner ? 'SlotMachine-Winner' : 'SlotMachine'}>

            <p style={{fontSize: '50px'}}> {emojiMaker(s1)} {emojiMaker(s2)} {emojiMaker(s3)} </p>

            <p>{winner ? 'You win!' : 'You lose!'}</p>

        </div>
    );
}

export default SlotMachine;