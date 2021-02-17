import React from 'react';
import {useCompanyInfoQuery} from '../../generated/graphql';

const CompanyInfo = () => {
    const {data,error,loading} = useCompanyInfoQuery();

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error || !data) {
        return <div>ERROR</div>;
      }

    return (
        <div>
        <h1>{data.info?.name}</h1>
        <h2>{data.info?.summary}</h2>
        <h2>Founded in year {data.info?.founded}</h2>
        <h1>Founder and CEO:</h1>
        <h2>{data.info?.ceo}</h2>
        <h2>Company valuation: {data.info?.valuation}</h2>
        </div>
    )
}

export default CompanyInfo;