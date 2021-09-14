import { useRouter } from 'next/router';

function Task() {
  const router = useRouter();
  const taskId = router.query.taskId;
  return (
    <>
      <h1>Task</h1>
      <p>This is {taskId}</p>
    </>
  );
}

export default Task;
