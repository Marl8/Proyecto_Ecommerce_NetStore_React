const Footer = () => {
    let styles = {
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '1.5rem 0',
        width: '100%',
        bottom: '0',
    }
    
    return (
        <footer style = {styles}>
            <p>&copy;2025 - Martin Lemberger</p>
        </footer>
    )
}

export default Footer