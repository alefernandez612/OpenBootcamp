import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {

    const [connect, setConnect] = useState(contact.connect);

    const changeState = () => {
        setConnect(!connect);
    };

    return (
        <div>
            <h2>
                Complete Name: { contact.name } { contact.lastname }
            </h2>
            <h3>
                Email: { contact.email }
            </h3>
            <h3>{ connect ? 'Connect' : 'Disconnect' }</h3>
            <button onClick={ changeState }>Change State</button>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
