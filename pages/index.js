import styled from 'styled-components'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GithubCorner'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import db from '../db.json'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const theme = db.theme;
  const router = useRouter();

  const [ userName, setUserName ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/quiz?name=${userName}`);
  }

  return (
    <QuizBackground backgroundImage={db.bg.secondary}>
      <QuizContainer>
      <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>

            <Widget.Form onSubmit={handleSubmit}>
              <input 
                onChange={(event) => setUserName(event.target.value)}
                placeholder="Diz aí seu nome pra jogar :)"
              />
              <Widget.Button
                type="submit"
                disabled={userName.length === 0}
              >Jogar</Widget.Button>
            </Widget.Form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/mateusisrael"/>
    </QuizBackground>

  );
}
