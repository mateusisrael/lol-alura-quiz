import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import PointsWidget from '../src/components/PointsWidget';
import Footer from '../src/components/Footer';
import db from '../db.json';

const Quiz = () => {
  // const router = useRouter();
  // const { name } = router.query;
  const { questions } = db;
  const { theme } = db;
  const quizStages = {
    quiz: "quiz",
    points: "points"
  }
  const [quizStage, setQuizStage] = useState(quizStages.quiz);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(undefined);
  const [isCorrectAnswer, setisCorrectAnswer] = useState(undefined);

  let points = [true, false];


  const handleConfirmAnswer = (event) => {
    event.preventDefault();
    const correctAnswer = questions[currentQuestion].answer;

    if(correctAnswer === selectedAnswer) {
      setisCorrectAnswer(true);
    } else {
      setisCorrectAnswer(false);
    }

    // setTimeout(() => {
    //   changeStage();
    // }, 2000)

    changeStage();
  }

  const changeStage = () => {
    if(currentQuestion+1 < questions.length) {
      setCurrentQuestion(currentQuestion+1);
      setSelectedAnswer(undefined);
      setisCorrectAnswer(undefined);

    } else {
      setQuizStage(quizStages.points);
    }

  }

  const handleSelectAnswer = (ind) => {
    setSelectedAnswer(ind)
  }

  const setSubmitButtonColor = () => {
    switch(isCorrectAnswer) {
      case true:
        return `linear-gradient(77deg, ${theme.colors.success}, ${theme.colors.success})`
      case false:
        return `linear-gradient(77deg, ${theme.colors.wrong}, ${theme.colors.wrong})`
      default:
        return 'linear-gradient(77deg, #325CEDff, #76C1E8ff)'

    }
  }

  const setButtonText = () => {
    switch(isCorrectAnswer) {
      case true:
        return 'Mandou Bem';
      case false:
        return 'Epa, você errou';
      default:
        return 'Confirmar';
    }
  }

  return(
    <div>
      <QuizBackground
        isAnimated={true}
        backgroundImage={db.bg.primary}>
        
        {
          quizStage === "quiz" ? (
            <QuizContainer>
              <Widget>
                <Widget.Header>
                  <h1>Pergunta {currentQuestion + 1} de {questions.length}</h1>
                </Widget.Header>
                <Widget.Content>
                  <Widget.Form onSubmit={handleConfirmAnswer}>
                    <h1>{questions[currentQuestion].title}</h1>
                    <p>{questions[currentQuestion].description}</p>

                  {
                    questions[currentQuestion].alternatives.map((alternative, id) => (
                        <Widget.Button
                          key={id}
                          margin={"0 0 8px"}
                          type="button"
                          backgroundColor={selectedAnswer === id ? theme.colors.primary : '#3A4D6Dff'}
                          onClick={() => handleSelectAnswer(id)}
                        >{alternative}</Widget.Button> 
                      ))
                  }

                    <Widget.Button
                      type="submit"
                      margin={"25px 0 0 0"}
                      backgroundImage={setSubmitButtonColor}
                      disabled={selectedAnswer === undefined}
                    >{setButtonText()}</Widget.Button>

                  </Widget.Form>
                </Widget.Content>
              </Widget>
              <Footer />
            </QuizContainer>
          ) : (
            <PointsWidget totalPoints={points} />
          )
        }
      </QuizBackground>
    </div>
  );
}

export default Quiz;