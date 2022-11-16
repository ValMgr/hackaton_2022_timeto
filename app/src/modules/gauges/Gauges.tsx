import { useEffect, useState } from "react";

import { useGameContext } from "@/core/providers/GameProvider";
import { GAUGE_MAX } from '@/core/constants/gauges';
import Gauge from '@/modules/gauges/components/Gauge';
import { ContainerGauge, MainContainer, TitleContainerGauge, EnvelopValue } from './styledComponents';

function Gauges() {
	const { score, updateScore } = useGameContext();

	return (
		<>
			<MainContainer>
				<TitleContainerGauge>0 mois / 24</TitleContainerGauge>
				<ContainerGauge>
					<Gauge label="Social" value={score.environmental} limit={GAUGE_MAX} gaugeColor={"#C1B5F1"} />
					<Gauge label="Eco" value={score.economy} limit={GAUGE_MAX} gaugeColor={"#DF6734"} />
					<Gauge label="Env." value={score.social} limit={GAUGE_MAX} gaugeColor={"#D6E787"} />
				</ContainerGauge>
				<EnvelopValue>30 000 €</EnvelopValue>
			</MainContainer>
		</>
	);
}

export default Gauges;