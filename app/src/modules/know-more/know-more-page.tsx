import {MainContainer, ContainerAll, TitleContainer, TitlePage, TitleGreen, Text, TitleSpan, TextTitle, CardContainer, Container} from "./components/styledComponents";

function Know() {

  // str.substring(0, 1)

  return(
    <MainContainer>
			<TitleContainer>
				<TitlePage>Time to </TitlePage><TitleSpan> [ know more ]</TitleSpan>
			</TitleContainer>
				
			<ContainerAll>
				<Container>
				<TextTitle color= "#9184C5">
					[ C'est quoi ? ]
				</TextTitle>
				<Text>Un atelier de sensibilisation RSE autour d’un jeu collaboratif suivi de débats animés par un intervenant externe à l’entreprise. </Text>
				<TextTitle >
					[ Pour qui ? ]
				</TextTitle>
				<Text>
				Pour les entreprises souhaitant sensibiliser ses salariés aux enjeux RSE (responsabilité Sociétale des Entreprises), de manière concrète et réaliste.
				</Text>
				<TitleGreen>
					[ Notre promesse ]
				</TitleGreen>
				<Text>
				Un débat ludique, riche et construit, avec des clés et conseils pour intégrer les enjeux sociaux, économiques et environnementaux à votre business. Nous vous donnons les clés pour pérenniser votre entreprise existante, et pour vous projeter dans vos futurs projets de manière responsable.
				</Text>
				</Container>

				<CardContainer>
					<TitleGreen>
						[ Comment jouer ]
					</TitleGreen>
					<Text>
					Avant de démarrer la partie, une somme d’argent est attribuée à l’équipe. 
					Elle sera utilisée pour prendre des décisions plus ou moins coûteuses.
					</Text>
					<Text>
					Une fois la partie lancée, des décisions sur la création de l’entreprise seront à prendre. 
					Mais il ne faut pas les prendre à la légère, elles peuvent impacter ou non les 3 piliers RSE. 
					Puis, des questions seront posées dans un ordre aléatoire. 
					Elles traiteront des thématiques environnementales, sociétales, économiques et éthiques.
					</Text>
					<Text>
					Les participants ont une minute pour voter à chaque question, anonymement. 
					Après le délai, les votes se dévoilent pour que chacun puisse défendre son avis ou  prendre connaissance des différentes opinions. 
					Le jeu prend fin lorsque toutes les décisions seront prises.
					</Text>
					<Text>
					A la fin du jeu, un score global sera calculé, qui sera une moyenne du score des trois piliers.
					</Text>
					<Text>
					Une discussion sera encouragée pour passer à l’étape suivante. 
					En effet, les participants pourront rectifier une décision pour chacun des piliers pour essayer d’améliorer leur score.
					</Text>
				</CardContainer>
			</ContainerAll>
    </MainContainer>
  )
}

export default Know;