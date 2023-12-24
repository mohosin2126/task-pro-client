import useTask from "../../hooks/useTask";
import TaskCard from "./TaskCard";

const MyTask = () => {
  const [allData,refetch] = useTask([]);

  return (
    <div>
      <div>
        <h1 className="text-center font-extrabold text-3xl mt-16">My Task</h1>
      </div>
      <div className="flex flex-wrap gap-10 mt-10">
        {Array.isArray(allData) &&
          allData.map((data) => <TaskCard data={data} refetch={refetch} key={data._id}></TaskCard>)}
      </div>
    </div>
  );
};

export default MyTask;
