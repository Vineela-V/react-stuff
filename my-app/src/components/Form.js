import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';


export const Form = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required("Your Full Name is required"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null])
        .required(),
    });
    
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema), 
    });

    const onsubmit = (data) => {
        console.log(data);
    };

    return (
        <form onsubmit={handleSubmit(onsubmit)}>
            <input type="text" placeholder="Full Name..." {...register("fullName")} />
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email..." {...register("email")}/>
            <p>{errors.fullName?.message}</p>
            <input type="number" placeholder="Age..." {...register("age")}/>
            <p>{errors.fullName?.message}</p>
            <input 
            type="text" 
            placeholder="Password..."
            {...register("Password")} 
            />
            <p>{errors.fullName?.message}</p>
            <input 
            type="text" 
            placeholder="Confirm Password..." 
            {...register("ConfirmPassword")}
            />
            <p>{errors.fullName?.message}</p>
            <input type="submit" />
        </form>
    );
};