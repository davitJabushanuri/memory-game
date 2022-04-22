import React, { useState, useEffect } from 'react'
import './App.css'
import CardsGrid from './components/CardsGrid'
import StartGame from './components/StartGame'
import cardsArray from './components/Helpers/cardsArray'

function App() {
	const [startGame, setStartGame] = useState()
	const [score, setScore] = useState(0)
	const [scoreArray, setScoreArray] = useState([])
	const [gameOver, setGameOver] = useState(false)
	const [displayScore, setDisplayScore] = useState(score)

	useEffect(() => {
		setScoreArray([])
		setDisplayScore(score - 1)
	}, [gameOver])

	return (
		<div className='App'>
			{!startGame && (
				<div className='info'>
					<h1>Don't click the same card twice</h1>{' '}
					<h1>Your score is {score}</h1>
				</div>
			)}
			<CardsGrid
				setScore={setScore}
				cardsArray={cardsArray}
				scoreArray={scoreArray}
				setScoreArray={setScoreArray}
				setGameOver={setGameOver}
				setStartGame={setStartGame}
			/>
			{startGame && (
				<StartGame
					displayScore={displayScore}
					gameOver={gameOver}
					setStartGame={setStartGame}
					setScore={setScore}
					setGameOver={setGameOver}
				/>
			)}
		</div>
	)
}

export default App
