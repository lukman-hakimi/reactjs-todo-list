import { useEffect, useState } from "react";

const Pagination = () => {
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(6);

    useEffect(() => {
        
    })

    const prev = () => {
        setPage(
            () => {
                if(page === 1) return page
                return page - 1;
            }
        )
    }

    const next = () => {
        setPage(
            () => {
                if(page === pageCount) return page
                return page + 1;
            }
        )
    }
    
    return (
        <div style={{ display: "flex", justifyContent:"center", alignItems:"center"}}>
            <div style={{ display: "flex", justifyContent:"space-between",alignItems:"center", width: "50%"}}>
            <button onClick={prev} className="btn btn-secondary">
                prev
            </button>
            <h6>{page}</h6>
            <button onClick={next} className="btn btn-secondary">
                next
            </button>
            </div>
        </div>
    )
}

export default Pagination;