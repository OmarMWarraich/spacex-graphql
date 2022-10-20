import * as React from 'react';
import { LaunchesQuery } from '../../generated/graphql';
import './styles.css';

export interface OwnProps {
    handleIdChange: (newId: number) => void;
  }
  
  interface Props extends OwnProps {
    data: LaunchesQuery;
  }

const className = 'LaunchList';

const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => (
    <div className={className}>
        <h3>Launches</h3>
        <ol className={`${className}__list`}>
            {!!data.launches &&
                data.launches.map(
                    (launch, i) =>
                    !!launch && (
                        <li 
                          key={i} 
                          className={`${className}__item`}
                          onClick={() => handleIdChange(launch.flight_number || 0)}
                        >
                            {launch.mission_name} ({launch.launch_year})
                        </li>
                    ),
                )}
        </ol>
    </div>
);

export default LaunchList;