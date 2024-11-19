import "./App.css";
import Empty from "./components/Empty";
import CreateCategory from "./pages/CreateCategory";
const categoryList = [
    // {
    //     id:1,
    //     name:"Html"
    // },
    // {
    //     id:2,
    //     name:"Javascript"
    // },
    // {
    //     id:3,
    //     name:"css"
    // },
    // {
    //     id:4,
    //     name:"php"
    // },
]

function App() {
    return (
        <>
            <CreateCategory categoryList={categoryList}/>
        </>
    )
}

export default App;
