import react, {Component}from 'react';


class Registerform extends Component {

  

    render() {
        return(
            <div>
                <div className="buttons has-addons">
                    <div>
                        <button className="button is-link" id="privatperson">Privatperson</button>
                        <button className="button" id="unternehmen">Unternehmen</button>
                    </div>
                    <div>
                        <div className="field">
                            <label className="label">Email</label>
                            <div>
                                <input type="email" name="email" placeholder="max.mustermann@musterunternehmen.de" className="input"/>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <div className="field">
                                    <label className="label">Nachname</label>
                                    <div>
                                        <input type="text" name="nachname" placeholder="Mustermann" className="input"/>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <label className="label">Vorname</label>
                                <div>
                                    <input type="text" name="vorname" placeholder="Max" className="input"/>
                                </div>
                            </div>
                        </div>
                    </div>
               
                </div>
            </div>
        )
    }
}

export default Registerform