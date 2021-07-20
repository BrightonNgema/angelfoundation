import { gql } from '@apollo/client';

const YOCO_PAYMENT = gql`
    mutation($input:PaymentInput!){
        pay(input:$input)
}
`;

export default YOCO_PAYMENT;