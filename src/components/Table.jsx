import { PencilLine, Trash2 } from "lucide-react"
import Button from "./Button"
import { useDispatch } from "react-redux"
import {removeCategories} from "../features/category/categorySlice"
import Loading from "./Loading"
const Table = ({title, dataList, isLoading})=>{
    const dispatch = useDispatch()
    return(
        <>
        {
            !isLoading && dataList.length > 0 ? 
            
            <div>
                {title && <h1 className="text-start p-4">{title}</h1>}
                <div className="overflow-x-auto max-h-screen">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th className="text-end">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            // eslint-disable-next-line react/prop-types
                            dataList?.map((data, index)=>{
                                return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <th>{data.name}</th>
                                    <th>
                                        <div className="flex gap-2 justify-end">
                                            <Button className = "btn-sm btn-primary" value={<PencilLine color="white" size={16}/>}/>
                                            
                                            <Button _onClick ={()=>(dispatch(removeCategories(data.id)))} className = "btn-sm btn-error" value={<Trash2 color="white" size={16}/>}/>
                                        </div>
                                    </th>
                                </tr>
                                )
                            })
                        }
    
                        </tbody>
                    </table>
                </div>
            </div>
            : <Loading/>
       }
        </>
    )
}

export default Table