const USER_MAIN_DATA = [
    {
      id: 12,
      userInfos: {
        firstName: 'Thomas',
        lastName: 'Dupont',
        age: 22,
      },
      todayScore: 0.3,
      keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50,
      },
    },
    {
      id: 18,
      userInfos: {
        firstName: 'Jean',
        lastName: 'Pierre',
        age: 28,
      },
      score: 0.4,
      keyData: {
        calorieCount: 2530,
        proteinCount: 80,
        carbohydrateCount: 160,
        lipidCount: 110,
      }
    }
  ];
  
  const USER_ACTIVITY = [
    {
      userId: 12,
      sessions: [
        {
          day: '2022-07-20',
          kilogram: 80,
          calories: 240,
        },
        {
          day: '2022-07-21',
          kilogram: 80,
          calories: 220,
        },
        {
          day: '2022-07-22',
          kilogram: 81,
          calories: 280,
        },
        {
          day: '2022-07-23',
          kilogram: 81,
          calories: 290,
        },
        {
          day: '2022-07-24',
          kilogram: 80,
          calories: 160,
        },
        {
          day: '2022-07-25',
          kilogram: 78,
          calories: 162,
        },
        {
          day: '2022-07-26',
          kilogram: 76,
          calories: 390,
        }
      ]
    },
    {
      userId: 18,
      sessions: [
        {
          day: '2022-07-20',
          kilogram: 70,
          calories: 240,
        },
        {
          day: '2022-07-21',
          kilogram: 69,
          calories: 220,
        },
        {
          day: '2022-07-22',
          kilogram: 70,
          calories: 280,
        },
        {
          day: '2022-07-23',
          kilogram: 70,
          calories: 500,
        },
        {
          day: '2022-07-24',
          kilogram: 69,
          calories: 160,
        },
        {
          day: '2022-07-25',
          kilogram: 69,
          calories: 162,
        },
        {
          day: '2022-07-26',
          kilogram: 69,
          calories: 390,
        }
      ]
    }
  ];
  
  const USER_AVERAGE_SESSIONS = [
    {
      userId: 12,
      sessions: [
        {
          day: 1,
          sessionLength: 29,
        },
        {
          day: 2,
          sessionLength: 24,
        },
        {
          day: 3,
          sessionLength: 43,
        },
        {
          day: 4,
          sessionLength: 52,
        },
        {
          day: 5,
          sessionLength: 30,
        },
        {
          day: 6,
          sessionLength: 26,
        },
        {
          day: 7,
          sessionLength: 60,
        }
      ]
    },
    {
      userId: 18,
      sessions: [
        {
          day: 1,
          sessionLength: 30,
        },
        {
          day: 2,
          sessionLength: 40,
        },
        {
          day: 3,
          sessionLength: 50,
        },
        {
          day: 4,
          sessionLength: 30,
        },
        {
          day: 5,
          sessionLength: 30,
        },
        {
          day: 6,
          sessionLength: 50,
        },
        {
          day: 7,
          sessionLength: 50,
        }
      ]
    }
  ];
  
  const USER_PERFORMANCE = [
    {
      userId: 12,
      kind: {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity',
      },
      data: [
        {
          value: 80,
          kind: 1,
        },
        {
          value: 120,
          kind: 2,
        },
        {
          value: 140,
          kind: 3,
        },
        {
          value: 50,
          kind: 4,
        },
        {
          value: 200,
          kind: 5,
        },
        {
          value: 90,
          kind: 6,
        }
      ]
    },
    {
      userId: 18,
      kind: {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity',
      },
      data: [
        {
          value: 200,
          kind: 1,
        },
        {
          value: 240,
          kind: 2,
        },
        {
          value: 80,
          kind: 3,
        },
        {
          value: 80,
          kind: 4,
        },
        {
          value: 220,
          kind: 5,
        },
        {
          value: 110,
          kind: 6,
        }
      ]
    }
  ];
  
  module.exports = {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
  };