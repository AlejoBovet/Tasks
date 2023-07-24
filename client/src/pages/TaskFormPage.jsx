import { useForm } from 'react-hook-form';
import {createTask, deleteTask} from '../api/tasksApi';
import {useNavigate, useParams} from 'react-router-dom';


export function TasksFormPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate()
    const params = useParams()
    
    const onSubmit = handleSubmit(async data => {
        const res = await createTask(data);
        navigate("/tasks")
    })

    return (
        <div>

            <form onSubmit={onSubmit}>

                <input type="text" placeholder="title" {...register("title", { required: true })} />
                {errors.title && <span>This field is required</span>}

                <textarea name="" id="" rows="3" {...register("description", { required: true })}></textarea>
                {errors.description && <span>This field is required</span>}

                <button>Save</button>
            </form>

            {params.id && (<button onClick={async()=>{
                const accepted = window.confirm("Are you sure?");
                if(accepted){
                    await deleteTask(params.id);
                    navigate("/tasks")
                }
            }}>Delete</button>
            )}

        </div>
    )
}