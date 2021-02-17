import { Link, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useMissionsQuery } from '../../generated/graphql';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minWidth: 400,
        maxWidth: 800,
        marginLeft: 20
    }

}))
const MissionInfo = (myid: any) => {
    const classes = useStyles();
    const {data,loading,error,refetch} = useMissionsQuery({
        variables: { id: myid.myid },
      });
    
    useEffect(() => {
        refetch();
    },[myid,refetch]);

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error || !data) {
        return <div>ERROR</div>;
      }

    return (
        
        <div className={classes.root}>
            <h1>{data.mission?.mission_name}</h1>
            <h2>{data.mission?.description}</h2>
            <Link>{data.mission?.website}</Link><br/>
            <Link>{data.mission?.twitter}</Link><br/>
            <Link>{data.mission?.wikipedia}</Link>
            
        </div>
    )
}
export default MissionInfo;