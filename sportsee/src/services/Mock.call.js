import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./mocked-datas";

// Get datas from mocked-datas
export class Mock {
  constructor(main, activity, average, performance) {
    this.main = USER_MAIN_DATA;
    this.activity = USER_ACTIVITY;
    this.average = USER_AVERAGE_SESSIONS;
    this.performance = USER_PERFORMANCE;
  }
  async getMainData(id) {
    const userData = this.main.find((user) => user.id === Number(id));
    return userData;
  }

  async getUserActivity(userId) {
    const activityData = this.activity.find(
      (user) => user.userId === Number(userId)
    );
    return activityData;
  }

  async getUserAverage(userId) {
    const averageData = this.average.find(
      (user) => user.userId === Number(userId)
    );
    return averageData;
  }

  async getUserPerformance(userId) {
    const performanceData = this.performance.find(
      (user) => user.userId === Number(userId)
    );
    return performanceData;
  }
}
