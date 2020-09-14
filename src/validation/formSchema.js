import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string()
    .trim()
    .min(3, 'The username must be at least three characters')
    .required('The name is a required field'),
    email: yup.string()
    .trim()
    .email('The email must be a valid email address')
    .required('An email is required!'),
    tos: yup.string().required('The Terms Of Service are required to be accepted.'),
})

export default formSchema; 