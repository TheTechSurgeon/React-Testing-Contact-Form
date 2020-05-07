import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('inputs are visible', () => {
    const { getByText } = render(<ContactForm />);
    const fNameInput = getByText (/First Name*/i);
    expect(fNameInput).toBeVisible();
    const lNameInput = getByText (/Last Name*/i);
    expect(lNameInput).toBeVisible();
  
});


test("contact form submits", () => {
    const {getByLabelText, getByTestId } = render(<ContactForm />);

    const firstNameInput = getByLabelText(/First Name/i);
    const lastNameInput = getByLabelText(/Last Name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);



    fireEvent.change(firstNameInput, {
        target: {name: "firstName", value: "Ben" },
    });
    fireEvent.change(lastNameInput, {
        target: {name: "lastName", value: "simpson" },
    });
    fireEvent.change(emailInput, {
        target: {name: "email", value: "strengthofthemountain@gmail.com" },
    });
    fireEvent.change(messageInput, {
        target: {name: "message", value: "tests a component" },
    });


    expect(firstNameInput.value).toBe("Ben");
    expect(lastNameInput.value).toBe("simpson");
    expect(emailInput.value).toBe("strengthofthemountain@gmail.com");
    expect(messageInput.value).toBe("tests a component");


    //use button
    fireEvent.click(getByTestId(/submit/i));

    //assert contact added not very good test
    // const contactText = getByTestId('Ben');
    // expect(contactText).toBeInTheDocument();

   

})
