import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Inputs = ({an}) => {
    const initState = {username:'', email:'',address:'',pass:''}
    const [data, setData] = useState(initState)

    const handleChange = (e)=>{
        const {name, value} = e.target;

        setData({...data, [name]:value})
    }
  
    // const city = {
    //     name:"khulna",
    //     location:{
    //         location1:{
    //             subloc: "ala",
    //             subloc2: "ala",
    //         },
    //         location2:"ab",
    //     },
    //     name:"dhaka",
    // }

    // console.log(city.locations?.location1?.subloc2);

    const handleSubmit = (e)=>{
        if(data.username && data?.email === ""){return alert("Please Provide Something...")}
        e.preventDefault()
        an(data)
    }
    return (
        <form onSubmit={handleSubmit} className="border p-4 rounded-md border-gray-700 flex flex-col gap-4">
            <label className="input input-bordered flex items-center gap-2">Name
                <input onChange={handleChange} name="username" type="text" className="grow" placeholder="" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Email
                <input onChange={handleChange} name="email" type="text" className="grow" placeholder="" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Address
                <input onChange={handleChange} name="address" type="text" className="grow" placeholder="" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Password
                <input onChange={handleChange} name="pass" type="password" className="grow" placeholder="" />
            </label>
            <button className="btn btn-primary">Submit</button>
        </form>
    );
};

export default Inputs;