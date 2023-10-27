import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";

function CreateStudent()
{
    const [arr,setArr] = useState([]); //arr=[Raj,raj@gmail.com,1]

    //Declaring a argument function
    const getState = (childData) => { //childData=[Raj,raj@gmail.com,1]
        setArr(childData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();  //To empty the input fields after creating student
        const data = {name: arr[0],email:arr[1],rollNo:arr[2]};
        Axios.post("https://crud-deployment-backend-2-092w.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record added successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
        event.target.reset();  //To empty the input fields after creating student
    }

    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} >
                Create Student
            </StudentForm>
        </form>
    )
}
export default CreateStudent;