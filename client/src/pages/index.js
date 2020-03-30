import react, {Component} from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/navbar';
import Loginform from "../components/LoginForm/loginform";
import Registerform from "../components/RegisterForm/registerform";


class HomePage extends Component{
    render(){
        return(
            <div>
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"></link>
        </Head>

        <Navbar />
        <div className="outer">
            <section className="section">
                <div className="container">
                    <div className="Columns">
                        <div className="column is-half">
                            <h2 className="title is-4">
                               Registrierungsformular
                            </h2>
                            <Registerform />


                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
        )
    }
}

  
  export default HomePage