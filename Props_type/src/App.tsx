type AppProps = {
  name : string
  count : number
}

export const App = (props : AppProps) =>{
  return(
    <div>
      <h1>{props.name}</h1>
      <p>This is the number count {props.count}</p>
    </div>
  )
}