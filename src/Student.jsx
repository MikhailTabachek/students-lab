import Score from "./StudentScore"

const Student = (props) => {
  return ( 
    <>
      <div class="card">
        <h3 class="card-title">
          {props.student.name}: <br></br>
        </h3>
        {props.student.bio}
        <div class="text">
          {props.student.scores.map(score => 
          <Score name={props.student.name} score={score.score} date={score.date}/>
      )
      }
        </div>
      </div>
    </>
  )
}
export default Student