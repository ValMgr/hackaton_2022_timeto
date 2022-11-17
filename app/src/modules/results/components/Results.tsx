import { useGameContext } from "@/core/providers/GameProvider";
import { TitleResults, ResultsContainer, RangeProgress, Range, ScaleResults, SubTitleResults, ResultsCategories, ResultCategory, ResultContent } from "./styledComponents";
import { useState, useMemo } from 'react'


function Results() {
  const [category, setCategory] = useState('social');
  const { results } = useGameContext();

console.log(results)

  let randomNumber = Math.floor(Math.random() * (15 - 3 +1)) + 3;

  const answersSocial: JSX.Element[] = []

  for (let i = 1; i < randomNumber; i++) {
    let randomPoint = Math.floor(Math.random() * (2 - (-2) +1)) + (-2);
    answersSocial.push(
      <div>
        <div className="question">
          <div className="number">{i}. Question Sociale : </div> 
          <div className="text"> Etes vous pour le télétravail ?</div>
        </div>
        <div className="point">{randomPoint}</div>
      </div>
    );
  }

  const answersEco: JSX.Element[] = []

  for (let i = 1; i < randomNumber; i++) {
    let randomPoint = Math.floor(Math.random() * (2 - (-2) +1)) + (-2);
    answersEco.push(
      <div>
        <div className="question">
          <div className="number">{i}. Question Economique : </div> 
          <div className="text"> Pour réduire vos factures d'énergies, êtes vous prêt à...</div>
        </div>
        <div className="point">{randomPoint}</div>
      </div>
    );
  }

  const answersEnv: JSX.Element[] = []

  for (let i = 1; i < randomNumber; i++) {
    let randomPoint = Math.floor(Math.random() * (2 - (-2) +1)) + (-2);
    answersEnv.push(
      <div>
        <div className="question">
          <div className="number">{i}. Question Environnement : </div> 
          <div className="text"> Comment gérez-vous la pollution numérique ?</div>
        </div>
        <div className="point">{randomPoint}</div>
      </div>
    );
    }

  return(
    <ResultsContainer>
      <TitleResults>Peut mieux faire !</TitleResults>
      <ScaleResults>
        <div>--</div>
        <div>-</div>
        <div>0</div>
        <div>+</div>
        <div>++</div>
      </ScaleResults>
      <Range>
        <RangeProgress />
      </Range>
      <SubTitleResults>Récapitulatif des choix faits et de leurs impacts</SubTitleResults>

      <ResultsCategories>
        <ResultCategory onClick={() => setCategory('social')} category='social' actualCategory={category}>Social</ResultCategory>
        <ResultCategory onClick={() => setCategory('economie')} category='economie' actualCategory={category}>Economie</ResultCategory>
        <ResultCategory onClick={() => setCategory('environnement')} category='environnement' actualCategory={category}>Environnement</ResultCategory>
      </ResultsCategories>
        <ResultContent>
          {results.map(result => (
            <div key={result.id}>
            <div className="question">
              <div className="number">{result.id + 1}. Votre réponse : </div> 
              <div className="text"> {result.text}</div>
            </div>
            <div className="point">{result.gauges.social}</div>
          </div>
          ))}
        </ResultContent>
    </ResultsContainer>
  )

}

export default Results