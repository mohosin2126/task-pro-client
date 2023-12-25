import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const TaskCard = ({data ,refetch}) => {
    const {title,priority,date,_id,status,description}=data
    const axiosPublic=useAxiosPublic()
    const handleDelete=(id)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }) .then((result) => {
            if (result.isConfirmed) {
    
                axiosPublic.delete(`/alltask/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Task has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div>
            <div className="card w-96 h-96 bg-neutral text-neutral-content">
  <div className="card-body  ">
    <h2 className="text-center text-2xl font-serif text-rose-600">{title}</h2>
    <p className="text-start text-lg mt-5">Description: {description}</p>
    <div className="flex  justify-between">
    <p className="text-lg">Date: {date}</p>
    <p className="text-lg">Priority: <span className="text-emerald-500 font-bold text-lg">{priority}</span></p>
    </div>
    <p className="text-lg">Status: <span className="text-green-600 text-lg">{status}</span></p>
    <div className="flex justify-between">
       <Link to={`/dashboard/updateItem/${_id}`}> <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update</button></Link>
       
       <button onClick={() => handleDelete(_id)} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
     
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default TaskCard;