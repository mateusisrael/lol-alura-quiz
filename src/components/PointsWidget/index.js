import React from 'react';
import Widget from '../Widget';
import QuizContainer from '../QuizContainer';

const PointsWidget = ({ totalPoints }) => {

  return (
    <QuizContainer>
      <Widget>
        <Widget.Header>
          <h1>{`Parabéns, você fez x pontos`}</h1>
        </Widget.Header>
        <Widget.Content>
          {
            totalPoints.map((value, id) => {
              return value === true ? <p>Acertou</p> : <p>Errou</p>
            })
          }
        </Widget.Content>
      </Widget>
    </QuizContainer>
  );
}

export default PointsWidget;
