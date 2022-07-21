// React
import React from "react";

/**
 * Returns User's firsname
 * @function AnalyticsSide
 * @param { String } firstname
 * @returns { JSX }
 */

function Welcome({ firstname }) {
  return (
    <div>
      <h1>
        Bonjour{" "}
        <span className="firstname">{firstname.userInfos.firstName}</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    </div>
  );
}

export default Welcome;
