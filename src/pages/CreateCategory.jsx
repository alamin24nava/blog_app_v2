import { useState, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Table from "../components/Table";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
    getCategories,
    postCategories,
    removeCategories,
    categoriesGetuseSelector,
} from "../features/category/categorySlice";
import {
    getAuthors,
    removeAuthors,
    authorsGetuseSelector,
} from "../features/author/authorSlice";
// import DropDownOption from "../components/DropDownOption";
const CreateCategory = () => {
    const dispatch = useDispatch();
    const { isLoading, categoryList } = useSelector(categoriesGetuseSelector);
    const { authorList } = useSelector(authorsGetuseSelector);
    // console.log(authorList);
    useEffect(() => {
        dispatch(getCategories());
    }, []);
    useEffect(() => {
        dispatch(getAuthors());
    }, []);
    const [categoryName, setCategoryName] = useState("");
    const handleChange = (e) => {
        setCategoryName(e.target.value);
    };
    // handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (categoryName == "") {
            return toast.error("Please Provide Category Name..");
        }
        let isIncludes = categoryList.find((ele) => ele.name == categoryName);
        if (isIncludes) return toast.error("This Category Already Added!");
        const createCategory = { name: categoryName };
        dispatch(postCategories(createCategory));
        setCategoryName("");
    };
    const categoriesRemove = (id) => {
        dispatch(removeCategories(id));
    };
    const authorsRemove = (id) => {
        dispatch(removeAuthors(id));
    };
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="border p-4 rounded-md border-gray-700">
                <form className="flex gap-3" onSubmit={handleSubmit}>
                    <Input
                        _onChange={handleChange}
                        name="categoryName"
                        value={categoryName}
                        type="text"
                        placeholder="Type here"
                        className="input-bordered w-full"
                    />
                    <Button
                        className="btn-primary"
                        type="submit"
                        value="Add Category"
                    />
                </form>
            </div>
            <div className="border p-4 rounded-md border-gray-700">
                <Table
                    isLoading={isLoading}
                    dataList={categoryList}
                    onRemove={categoriesRemove}
                    title="Category List"
                />
            </div>
            <div className="border p-4 rounded-md border-gray-700">
                <div className="flex gap-3">
                    {/* <DropDownOption /> */}
                    <Input
                        _onChange={handleChange}
                        name="categoryName"
                        value={categoryName}
                        type="text"
                        placeholder="Type here"
                        className="input-bordered w-full"
                    />
                    <Button
                        className="btn-primary"
                        type="submit"
                        value="Add Author"
                    />
                </div>
            </div>
            <div className="border p-4 rounded-md border-gray-700">
                <Table
                    title="Author List"
                    dataList={authorList}
                    onRemove={authorsRemove}
                />
            </div>
        </div>
    );
};

export default CreateCategory;
