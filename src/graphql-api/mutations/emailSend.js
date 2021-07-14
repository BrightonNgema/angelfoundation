import { gql } from 'apollo-boost';

export const SEND_EMAIL = gql`
    mutation($input:EmailInput){
        emailSend(input:$input)
}
`;