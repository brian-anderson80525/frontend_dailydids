import React from "react"
import Did from "../components/didit"

const AllLogs = (props) => {
    
    return props.dids.map((did) => <Did did={did} key={did.id} />)

   
}

export default AllLogs;