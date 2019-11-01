import React from 'react'

function Joke(props){
	let questionOrNot = "Question:";
	let answerOrPunchLine = "Answer:";
	if(props.question == "" || props.question == null){
		questionOrNot = "";
		answerOrPunchLine = "Punchline:";
	}
	return (
		<div>
		<h3>Joke {props.nr}</h3>
		<p>{questionOrNot} {props.question}</p>
		<p style={{color: !props.question && "blue"}}>{answerOrPunchLine} {props.punchLine}</p>
		</div>
		)
}


export default Joke