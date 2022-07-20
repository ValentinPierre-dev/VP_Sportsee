// React
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
// Service
import { service } from '../../services/Service.js';
// Components
import Welcome from '../../components/Welcome'
import Loader from '../../components/Loader';
import AnalyticsMain from '../../components/AnalyticsMain/index.jsx';
import AnalyticsSide from '../../components/AnalyticsSide/index.jsx';


/*const ProfilContent = styled.div`
  display: flex;
  flex-direction: row;
`

const ProfilActivity = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%
`

const ProfilKeydatas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28%;
  margin-left: 30px;
`

const ProfilMiniCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`*/



function Profil() {

    // get id from url
    const userId = useParams().id;

    // init State
    const [loading, setLoading] = useState(true);
    const [keyData, setKeyData] = useState(null);
    const [activity, setActivity] = useState([]);
    const [average, setAverage] = useState([]);
    const [performance, setPerformance] = useState([]);
  
    // get Data after update state
    useEffect(() => {
      const getKeyData = async () => {
        return service.getMainData(userId);
      };
  
      getKeyData()
        .then((user) => {
          setKeyData(user)
          setLoading(false)})
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    }, [userId]);

    useEffect(() => {
      if (keyData) {
        const getActivity = async () => {
          return service.getUserActivity(userId);
        };
  
        const getAverage = async () => {
          return service.getUserAverage(userId);
        };
  
        const getPerformance = async () => {
          return service.getUserPerformance(userId);
        };
  
        Promise.all([getActivity(), getAverage(), getPerformance()])
          .then((values) => {
            setActivity(values[0]);
            setAverage(values[1]);
            setPerformance(values[2]);
          })
          .catch((e) => {
            console.log(e);
          })
          .finally(() => {
            setTimeout(() => {
              setLoading(false);
            }, 1500);
          });
      }
    }, [keyData, userId]);

    if (loading) {
      if (
        !loading &&
        (keyData === null || keyData === undefined || keyData === false)
      ) {
        setLoading(false);
        console.log('error')
        return <Navigate to="not-found" />;
      }
      return <Loader />;
    }
    // if loading is over or there is no data
    return (
      <div className='profil'>
        <Welcome firstname={keyData} />
        <div className='profil-content'>
          <AnalyticsMain 
            activity={activity} 
            average={average}
            performance={performance}
            score={keyData}
          />
          <AnalyticsSide analyticsData={keyData.keyData} />
        </div>
      </div>
    );
}

export default Profil;
