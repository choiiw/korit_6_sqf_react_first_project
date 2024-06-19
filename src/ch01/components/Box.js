function Box({name, isShow, children }) {
    const result = true && 10;
    console.log(result);

    return <div>
        <h1>{name}</h1>
        {children}
        {1 + 1}
        {true && "김준일"}
        {isShow && <h3>안녕하세요</h3>}
    </div>
}

export default Box;