type CompProps = {
 nameList: {
  fname: string,
  lname: string,
 }[]
}

export const Comp = (props:CompProps) =>{
 return(
  <>
  {props.nameList.map((items, index) => {
   return(
    <div>
     <h1 key={index}>{items.fname} {items.lname}</h1>
    </div>
   )
  })}
  </>
 )
}