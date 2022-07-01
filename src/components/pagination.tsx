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

    function prevPage(){ setPage( page - 1 ) }
    function nextPage(){ setPage( page + 1 ) }
    
    return <div className="pagination__container wrapper-small">
        <div className="pagination__prev">
            {page > 1 ? ( <span onClick={prevPage}>{'<'} Prev page</span> ) : '' }
        </div>
        <div className="pagination__current">
            <h3>Page {page}</h3>
        </div>
        <div className="pagination__next">
            {page < allPages ? ( <span onClick={nextPage}>Next page {'>'}</span> ) : '' } 
        </div>
    </div>
}

export default PaginationLink