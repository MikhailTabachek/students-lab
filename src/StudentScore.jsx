const Score = (props) => {
  return(
    <>
      <div className="text">{props.name} has score of {props.score} on {props.date}</div>
    </>
  )
}

export default Score