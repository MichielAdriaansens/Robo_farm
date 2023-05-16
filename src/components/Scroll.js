const Scroll = ({ children }) => {

    return (
        <div style={{ overflowY: 'scroll', height: '65vh', border: '3px solid rgba(173,255,47,.6)', }}>
            {children}
        </div>
    );
};

export default Scroll;