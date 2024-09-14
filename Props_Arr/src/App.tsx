import { Comp } from "./Component1"

export const App = () =>{

  const Persons = [
    {
      fname : "James",
      lname : "Anderson"
    },
    {
      fname : "John",
      lname : "Smith"
    },
    {
      fname : "Linda",
      lname : "Clark"
    },
  ]
  return(
    <div>
      <Comp nameList = {Persons}/>
    </div>
  )
}