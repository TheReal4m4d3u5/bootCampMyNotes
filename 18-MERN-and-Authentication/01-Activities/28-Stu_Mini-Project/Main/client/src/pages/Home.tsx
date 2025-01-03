import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Matchup from '../models/Matchup';
import gql from 'graphql-tag';

const GET_MATCHUPS = gql`
  query GetMatchups {
    matchups {
      id
      tech1 {
        name
      }
      tech2 {
        name
      }
      votes1
      votes2
    }
  }
`;

const Home = () => {

  const { loading, data } = useQuery(GET_MATCHUPS);

  // const { loading, data } = useQuery(QUERY_MATCHUPS, {
  //   fetchPolicy: "no-cache"
  // });

  const matchupList = data?.matchups || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Tech Matchup!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of matchups you can vote on:</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {matchupList.map((matchup: Matchup) => {
              return (
                <li key={matchup._id}>
                  <Link to={{ pathname: `/matchup/${matchup._id}` }}>
                    {matchup.tech1} vs. {matchup.tech2}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new matchup?</h2>
        <Link to="/matchup">
          <button className="btn btn-lg btn-danger">Create Matchup!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
