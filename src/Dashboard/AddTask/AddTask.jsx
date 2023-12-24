import { useForm } from "react-hook-form";


const AddTask = () => {
    const { register, handleSubmit } = useForm();
const onSubmit=async(data)=>{
    console.log(data)
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
                    <textarea {...register('email')} className="input input-bordered w-full" placeholder="Email"></textarea>
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