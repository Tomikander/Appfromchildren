import { useEffect, useState } from "react";
import imagesList from "../../data/imagesList";
import answerOptions from "../../data/answerOptions";
import Textofpage from "../textPages/Textofpage";
import FirstButton from "./FirstButton";
import RandomImage from "../RandomImage";
import AnswerButton from "./AnswerButton";
import { useLanguage } from "../../hooks/useLanguage";
import LanguageSwitcher from "./../Button/LanguageSwitcher";

export default function LoadingButton() {
  
  const { t, language, setLanguage } = useLanguage();

  const [isLoading, setLoading] = useState(false);
  const [randomImage, setRandomImage] = useState('');
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    if (randomImage && answerOptions[randomImage]) {
      const answersInCurrentLang = answerOptions[randomImage].answers[language];
      setCurrentAnswers(answersInCurrentLang);
    } else {
      setCurrentAnswers([]);
    }
  }, [randomImage, language]);

  const handleClick = () => {
    setLoading(true);
    setRandomImage('');
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * imagesList.length);
        const newImage = imagesList[randomIndex];
        setRandomImage(newImage);
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  
    const correctAnswer = answerOptions[randomImage]?.correct[language]; 
    const isRight = answer === correctAnswer;
  
    setIsCorrect(isRight);
    if (isRight) {
      playSound('/sounds/correct.mp3');
    } else {
      playSound('/sounds/wrong.mp3');
    }

    function playSound(url) {
      const audio = new Audio(url);
      audio.play().catch((err) => console.error("Ошибка воспроизведения:", err));
    }
  };

	return (
		<div className="text-center mt-5">
			
			<FirstButton isLoading={isLoading} handleClick={handleClick} text={t("button")} loadingText={t("loading")} />
			<Textofpage title={t("title")} />
			{randomImage && <RandomImage src={randomImage} />}
			
			
			{currentAnswers.length > 0 && (
				<div className="mt-5 d-flex flex-column align-items-center w-100">
					<p className="text-center fs-5 text-warning fw-bold">{t("choose")}</p>
					
					<div className="d-flex gap-3 flex-wrap justify-content-center w-100">
						{currentAnswers.map((answer, index) => (
							<AnswerButton
								key={index}
								answer={answer}
								selectedAnswer={selectedAnswer}
								isCorrect={isCorrect}
								onSelect={(selectedAnswer) => handleAnswerClick(selectedAnswer)}
							/>
						))}
					</div>
	
					
					{isCorrect === true && (
						<div className="text-success mt-3 fs-5">{t("correct")}</div>
					)}
					{isCorrect === false && (
						<div className="text-danger mt-3 fs-5">{t("incorrect")}</div>
					)}
				</div>
			)}
	
			{/* Переключатель языков — в самом низу экрана */}
			<LanguageSwitcher language={language} setLanguage={setLanguage} />
		</div>
	);
}