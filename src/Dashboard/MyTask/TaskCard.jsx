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
            <div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-center font-serif text-lg font-bold text-red-600">{title}</h2>
    <p>{description}</p>
    <p>{date}</p>
    <p>{priority}</p>
    <p>{status}</p>
    <div className="flex gap-10">
       <Link to={`/dashboard/updateItem/${_id}`}> <button> Update</button></Link>
        <button  onClick={() => handleDelete(_id)}>Delete</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default TaskCard;