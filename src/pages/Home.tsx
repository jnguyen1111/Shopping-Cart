import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export function Home() {
    return (
        <div style={{textAlign: 'center', padding: '50px'}}>
            <header style={{fontSize: '2em', marginBottom: '50px'}}>
                <h1>Welcome to My Shopping Cart</h1>
            </header>
            <main>
                <section style={{fontSize: '1.5em', margin: '50px 0'}}>
                    <h2>Explore Our Store</h2>
                    <p>Welcome to our online shopping cart! Discover a wide range of products and shop from the comfort of your home. Click the button below to start browsing.</p>
                    <Link to="/store" className="btn btn-primary" style={{fontSize: '1.25em'}}>Visit Store</Link>
                </section>
            </main>
            <footer style={{fontSize: '1em', marginTop: '50px'}}>
                <p>© 2023 My Shopping Cart</p>
            </footer>
        </div>
    );
}
