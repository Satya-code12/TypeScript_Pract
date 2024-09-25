type StatusProps = {
 stat : 'loading' | 'success' | 'error'
}

export const Status = (props : StatusProps) =>{

 let message
 if (props.stat === 'loading'){
  message = 'Loading....'
 } else if (props.stat === 'success'){
  message = 'Data Fetched successfully'
 } else if (props.stat === 'error'){
  message = 'Error in fetching data'
 }

 return(
  <>
   <h2>{message}</h2>
  </>
 )
}