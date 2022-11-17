import { useEffect, useState } from "react";

import { useGameContext } from "@/core/providers/GameProvider";
import { GAUGE_MAX } from '@/core/constants/gauges';
import Gauge from '@/modules/gauges/components/Gauge';
import { ContainerGauge, MainContainer, TitleContainerGauge, EnvelopValue } from '@/modules/gauges/styledComponents';

import money from "../../assets/MoneyTime.png";
import eco from "../../assets/FeuilleTime.png";
import social from "../../assets/SocialTime.png";
import pig from "../../assets/CochonTime.png";

function Gauges() {
	const { score } = useGameContext();

	return (
		<>
			<MainContainer>
				<TitleContainerGauge>0 mois / 24</TitleContainerGauge>
				<ContainerGauge>
					<Gauge label='Soc.' img={social} value={score.environmental} limit={GAUGE_MAX} gaugeColor={"#C1B5F1"} />
					<Gauge label='Éco.' img={money} value={score.economy} limit={GAUGE_MAX} gaugeColor={"#DF6734"} />
					<Gauge label='Env.' img={eco} value={score.social} limit={GAUGE_MAX} gaugeColor={"#D6E787"} />
				</ContainerGauge>
				<EnvelopValue>
					<img src={pig} />
					30 000 €
				</EnvelopValue>
			</MainContainer>
		</>
	);
}

export default Gauges;