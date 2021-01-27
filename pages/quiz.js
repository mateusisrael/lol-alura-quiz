import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import db from '../db.json';

const Quiz = () => {
  const router = useRouter();
  const { name } = router.query;

  return(
    <div>
      <QuizBackground
        isAnimated={true}
        backgroundImage={db.bg.primary}>
      </QuizBackground>
    </div>
  );
}

export default Quiz;