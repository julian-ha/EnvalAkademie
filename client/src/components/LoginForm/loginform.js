import react, {Component} from 'react';

class Loginform extends Component{


    changer(){
        console.log('asdfasdf');
    }
    render() {
        return (
        
        <div> 
            <div className="field">
                <label className="label">Email</label>
                <div>
                    <input type="email" name="email" placeholder="test@test.de" className="input"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Passwort</label>
                <div>
                    <input type="password" name="password" placeholder="***" className="input"/>
                </div>
            </div>
            <button className="button" onClick={this.changer}>Einloggen</button>
        </div>
        
        )
    }

}


export default Loginform

