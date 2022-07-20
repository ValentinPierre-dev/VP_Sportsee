// React
import React from 'react';

// Components
import CardActivity from './CardActivity';
import CardAverage from './CardAverage';
import CardPerformance from './CardPerformance';
import CardScore from './CardScore';

function AnalyticsMain({ activity, average, performance, score }) {

    return  (
        <main className='analytics-main'>
            <CardActivity activity={activity} />
            <div className='mini-cards'>
                <CardAverage average={average} />
                <CardPerformance performance={performance} />
                <CardScore score={score} />
            </div>
        </main>
    );
  }
  
  export default AnalyticsMain;