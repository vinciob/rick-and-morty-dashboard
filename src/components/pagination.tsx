// CSS
import './pagination.css'
// Types
import { Dispatch, SetStateAction } from "react"
interface PaginationProps{
    page: number,
    setPage: Dispatch<SetStateAction<number>>,
    allPages: number
}

function PaginationLink({page, setPage, allPages} : PaginationProps) {

    return <div className="pagination__container wrapper-small">
        {/* Previous Page Button*/}
        <div className="pagination__prev">
            { page > 1 && <span onClick={ () => setPage( page - 1 ) }>{'<'} Prev page</span> }
        </div>
        
        {/* Current Page */}
        <div className="pagination__current">
            <h3>Page { page }</h3>
        </div>
        
        {/* Next Page Button */}
        <div className="pagination__next">
            { page < allPages && <span onClick={ () => setPage( page + 1 ) }>Next page {'>'}</span> } 
        </div>
    </div>
}

export default PaginationLink