// React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Service
import { service } from "../../services/Service.js";

// Components
import Welcome from "../../components/Welcome";
import Error from "../Error/index.jsx";
import Loading from "../../components/Loading";
import AnalyticsMain from "../../components/AnalyticsMain/index.jsx";
import AnalyticsSide from "../../components/AnalyticsSide/index.jsx";

function Profil() {
  // get id from url
  const userId = +useParams().id;

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
        setKeyData(user);
        setLoading(false);
      })
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
      console.log("error");
      return <Error />;
    }
    return <Loading />;
  }

  return keyData ? (
    <div className="profil">
      <Welcome firstname={keyData} />
      <div className="profil-content">
        <AnalyticsMain
          activity={activity}
          average={average}
          performance={performance}
          score={keyData}
        />
        <AnalyticsSide analyticsData={keyData.keyData} />
      </div>
    </div>
  ) : (
    <Error />
  );
}

export default Profil;
