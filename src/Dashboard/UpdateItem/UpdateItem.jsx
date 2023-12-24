import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const UpdateItem = () => {
    const {_id,title,description} = useLoaderData();
  console.log(_id)
    const { register, handleSubmit,reset } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit=async(data)=>{
        const taskInfo = {
            title: data.title,
            description: data.description,
    
            
        }
        console.log(taskInfo)
        
        const taskRes = await axiosPublic.patch(`/alltask/${_id}`, taskInfo);
        if(taskRes.data.insertedId){
            // show success popup
            reset();
            Swal.fire({
                position: "top",
                icon: "success",
                title: `${data.title} is updated to the task.`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    
    
    }
    
    
    return (
        <div>
            <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Title*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Title"
                        {...register('title', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
              
               

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                </div>

              
                <button className="btn btn-block">
                    Update Task 
                </button>
            </form>
            </div>
        </div>
    );
};

export default UpdateItem;