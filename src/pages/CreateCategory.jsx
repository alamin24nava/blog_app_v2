import { useState,useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Table from "../components/Table";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import{getCategories, categoriesGetuseSelector} from "../features/category/categorySlice"
const CreateCategory = () => {
    const dispatch = useDispatch()
    const { isLoading, categoryList} = useSelector(categoriesGetuseSelector)
    useEffect(()=>{
        dispatch(getCategories())
    },[])
    const [categoryName, setCategoryName] = useState("")
    const handleChange = (e)=>{
        setCategoryName(e.target.value);
    }
    // handle Submit
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(categoryName == ""){return toast.error("Please Provide Category Name..")}

        const createCategory = {
            name: categoryName
        }
        console.log(createCategory);
    }
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="border p-4 rounded-md border-gray-700">
            <form className="flex gap-3" onSubmit={handleSubmit}>
                <Input _onChange = {handleChange} name="categoryName" value={categoryName.as} type="text" placeholder="Type here" className="input-bordered w-full max-w-xs"/>
                <Button className="btn-primary" type="submit" value="Add Category"/>                
            </form>
            </div>
            <div className="border p-4 rounded-md border-gray-700">
                <Table isLoading={isLoading} dataList={categoryList} title="Category List"/>
            </div>
        {/* <div className="border p-4 rounded-md border-gray-700">
            <div className="flex gap-3">
            <Input />
            <Button className="btn-primary" type="submit"/>
            </div>
        </div>
        <div className="border p-4 rounded-md border-gray-700">
            <Table title="Author List" dataList = {categoryList}/>
        </div> */}
        </div>
    );
};

export default CreateCategory;