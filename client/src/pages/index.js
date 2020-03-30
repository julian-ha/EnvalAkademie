import Head from 'next/head';
import Navbar from '../components/Navbar/navbar';

function HomePage() {
    return (
        <div>
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"></link>
        </Head>

        <Navbar />
        <div className="outer">
            <section className="section">
                <div className="container">
                    <div className="Columns">
                        <div className="column">
                            <h2 className="title is-4">
                                hallo wie gehts?
                            </h2>
                            <h3 className="title is-2">asdfasdfasd</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>

      


     </div>
    )
  }
  
  export default HomePage