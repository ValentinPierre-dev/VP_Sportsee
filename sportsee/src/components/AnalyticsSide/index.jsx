// React
import React from 'react';

// Components
import CardKeyData from './CardKeyData';

// Tools
import calories from '../../assets/calories.svg'
import proteins from '../../assets/proteins.svg'
import glucids from '../../assets/glucids.svg'
import lipids from '../../assets/lipids.svg'

function AnalyticsSide({ analyticsData }) {
    return (
        <aside className="analytics-side">
          <CardKeyData
            compoId="calo"
            iconSrc={calories}
            iconAlt="calories"
            compoValue={`${new Intl.NumberFormat('en-IN', {
              maximumSignificantDigits: 3,
            }).format(analyticsData.calorieCount)}kCal`}
            compoType="Calories"
          />
          <CardKeyData
            compoId="prot"
            iconSrc={proteins}
            iconAlt="protéines"
            compoValue={`${analyticsData.proteinCount}g`}
            compoType="Protéines"
          />
          <CardKeyData
            compoId="gluc"
            iconSrc={glucids}
            iconAlt="glucides"
            compoValue={`${analyticsData.carbohydrateCount}g`}
            compoType="Glucides"
          />
          <CardKeyData
            compoId="lipi"
            iconSrc={lipids}
            iconAlt="lipides"
            compoValue={`${analyticsData.lipidCount}g`}
            compoType="Lipides"
          />
        </aside>
      );
}

export default AnalyticsSide;