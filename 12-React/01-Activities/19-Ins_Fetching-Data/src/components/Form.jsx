export default({ onSubmitHandler, setSearch, search}) => {
    return (
        <form onSubmit={onSubmitHandler}>
            <input 
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search for a GIT"
            />
        </form>
    )
}



