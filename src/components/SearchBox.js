const SearchBox = ({ setUserInput }) => {

    function inputHandler(event) {
        setUserInput(event.target.value);
    }

    return (
        <input
            className="tc bg-lightest-blue pa3 ba b--green br3"
            type='text'
            placeholder="search robot"
            onChange={inputHandler}
        />
    );
}

export default SearchBox;