import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const AddTask = () => {
    const { user} = useContext(AuthContext);
    const axiosPublic=useAxiosPublic()
    const { register, handleSubmit ,reset} = useForm();
const onSubmit=async(data)=>{
    const taskInfo = {
        title: data.title,
        priority: data.priority,
        date: data.date,
        email :data.email,
        description: data.description,
        status:"Todo"

        
    }
    console.log(taskInfo)
    
    const taskRes = await axiosPublic.post('/alltask', taskInfo);
    if(taskRes.data.insertedId){
        // show success popup
        reset();
        Swal.fire({
            position: "top",
            icon: "success",
            title: `${data.title} is added to the menu.`,
            showConfirmButton: false,
            timer: 1500
          });
    }


}


    return (
        <div>
            <div>
            <h1 className="text-center font-extrabold text-3xl mt-16">Add Task</h1>
            </div>
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
                <div className="flex gap-6">
            
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Priority*</span>
                        </label>
                        <select defaultValue="default" {...register('priority', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select Priority</option>
                            <option value="high">High</option>
                            <option value="moderate">Moderate</option>
                            <option value="low">Low</option>
                           
                        </select>
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Deadlines*</span>
                        </label>
                        <input
                            type="date"
                            placeholder="date"
                            {...register('date', { required: true })}
                            className="input input-bordered w-full" />
                    </div>

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                            type="email"
                            placeholder={user?.email}
                            defaultValue={user?.email}
                            readOnly
                            {...register("email", { required: true })}
                            className="input input-bordered w-full" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                </div>

              
                <button className="btn btn-block">
                    Add Task 
                </button>
            </form>
        </div>
    </div>
    );
};

export default AddTask;