import Head from 'next/head';
import Navbar from '../components/navbar';

function HomePage() {
    return (
        <div>
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"></link>
        </Head>
        
        <Navbar />

      


     </div>
    )
  }
  
  export default HomePage