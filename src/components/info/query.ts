import gql from 'graphql-tag';

export const QUERY_INFO = gql`
  query CompanyInfo {
        info {
          name
          summary
          founded
          ceo
          valuation
        }    
        }  
`;