import { gql } from '@apollo/client';


const SEND_EMAIL = gql`
    mutation($input:EmailInput){
        emailSend(input:$input)
}
`;

export default SEND_EMAIL;