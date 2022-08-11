import React from 'react';
import ContactComponent from '../pure/contact';
import { Contact } from '../../models/contact.class';


const ContactView = () => {

    const contact = new Contact('Alex', 'Mata', 'alex1234@gmail.com', false);

    return (
        <div>
            <ContactComponent contact={ contact }></ContactComponent>
        </div>
    );
};


export default ContactView;
