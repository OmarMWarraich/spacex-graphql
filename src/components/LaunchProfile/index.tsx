import * as React from 'react';
import { useLaunchInfoQuery } from "../../generated/graphql";
import LaunchProfile from "./LaunchProfile";

interface OwnProps {
    id: number;
    }   

const LaunchProfileContainer: React.FC<OwnProps> = ({ id }) => {
    const { data, error, loading, refetch } = useLaunchInfoQuery({ 
        variables: { id: String(id) }, 
    });

    React.useEffect(() => {
        refetch({ id: String(id) })
    }, [refetch, id])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <LaunchProfile data={data} />;
}

export default LaunchProfileContainer;