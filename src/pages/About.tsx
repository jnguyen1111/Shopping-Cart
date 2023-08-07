import { Link } from 'react-router-dom';

export function About() {
    return (
        <div style={{textAlign: 'center', padding: '50px'}}>
            <header style={{fontSize: '2em', marginBottom: '50px'}}>
                <h1>About My Shopping Cart</h1>
            </header>
            <main>
                <section style={{fontSize: '1.5em', margin: '50px 0'}}>
                    <p>My Shopping Cart was established in 2023 with the purpose of providing providing a catalog of goods to choose from.</p>
                    <Link to="/" className="btn btn-primary" style={{fontSize: '1.25em'}}>Back to Home</Link>
                </section>
            </main>
            <footer style={{fontSize: '1em', marginTop: '50px'}}>
                <p>© 2023 My Shopping Cart</p>
            </footer>
        </div>
    );
}
