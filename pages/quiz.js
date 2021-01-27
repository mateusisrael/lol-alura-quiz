import { useRouter } from 'next/router';

const Quiz = () => {
  const router = useRouter();
  const { name } = router.query;

  return(
    <div>
      <h1>Quiz Page</h1>
      <p>Hello {name}</p>
    </div>
  );
}

export default Quiz;