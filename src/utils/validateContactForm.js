const validateContactForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    } else if (values.lastName.length < 2) {
        errors.firstName = 'Must be at least 2 characters';
    } else if (values.lastName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    const reg = /^\d+$/;

    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers';
    }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain an @';
    }

    return errors;
};

export default validateContactForm;