function main() {
  let teamOneScore = 0
  let teamTwoScore = 0

  const teamNameOne = document.querySelector('.team1 h2')

  console.log(teamNameOne)

  function handleChangeTeamOneName(event) {
    const elementThatChange = event.target
    const inputFieldValue = elementThatChange.value

    teamNameOne.textContent = inputFieldValue
  }

  const teamOneInput = document.querySelector('.team1 input')
  teamOneInput.addEventListener('input', handleChangeTeamOneName)

  const teamNameTwo = document.querySelector('.team2 h2')

  console.log(teamNameTwo)

  function handleChangeTeamTwoName(event) {
    const elementThatChange = event.target
    const inputFieldValue = elementThatChange.value

    teamNameTwo.textContent = inputFieldValue
  }

  const teamTwoInput = document.querySelector('.team2 input')
  teamTwoInput.addEventListener('input', handleChangeTeamTwoName)

  function incrementTheScoreForTeamOne() {
    if (teamOneScore >= 21) {
      return
    }
    teamOneScore = teamOneScore + 1
    console.log(teamOneScore)

    const teamOneScoreElement = document.querySelector('.team1 h3')
    console.log(teamOneScoreElement)

    teamOneScoreElement.textContent = teamOneScore
  }

  const teamOneButton = document.querySelector('.team1 .add')
  console.log(teamOneButton)

  teamOneButton.addEventListener('click', incrementTheScoreForTeamOne)

  function subtractTheScoreForTeamOne() {
    if (teamOneScore <= 0) {
      return
    }
    teamOneScore = teamOneScore - 1
    console.log(teamOneScore)

    const teamOneScoreElement = document.querySelector('.team1 h3')
    console.log(teamOneScoreElement)

    teamOneScoreElement.textContent = teamOneScore
  }

  const teamOneButtonSubtract = document.querySelector('.team1 .subtract')
  console.log(teamOneButtonSubtract)

  teamOneButtonSubtract.addEventListener('click', subtractTheScoreForTeamOne)

  function incrementTheScoreForTeamTwo() {
    if (teamTwoScore >= 21) {
      return
    }
    teamTwoScore = teamTwoScore + 1
    console.log(teamTwoScore)

    const teamTwoScoreElement = document.querySelector('.team2 h3')
    console.log(teamTwoScoreElement)

    teamTwoScoreElement.textContent = teamTwoScore
  }

  const teamTwoButton = document.querySelector('.team2 .add')
  console.log(teamTwoButton)

  teamTwoButton.addEventListener('click', incrementTheScoreForTeamTwo)

  function subtractTheScoreForTeamTwo() {
    if (teamTwoScore <= 0) {
      return
    }
    teamTwoScore = teamTwoScore - 1
    console.log(teamTwoScore)

    const teamTwoScoreElement = document.querySelector('.team2 h3')
    console.log(teamTwoScoreElement)

    teamTwoScoreElement.textContent = teamTwoScore
  }

  const teamTwoButtonSubtract = document.querySelector('.team2 .subtract')
  console.log(teamTwoButtonSubtract)

  teamTwoButtonSubtract.addEventListener('click', subtractTheScoreForTeamTwo)
}

document.addEventListener('DOMContentLoaded', main)
