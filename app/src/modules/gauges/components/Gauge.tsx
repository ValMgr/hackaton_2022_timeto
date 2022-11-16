import { useMemo } from 'react';

import { ContainerLevel, Level, GaugeLabel, MainContainer } from './styledComponents';

interface IProps {
	label: string;
	value: number;
	limit: number;
	gaugeColor: string
}

function Gauge({ label, value, limit, gaugeColor }: IProps) {
	const percentage = useMemo(() => ((value + (limit)) * 100) / (limit * 2), [value]);

	return (
		<MainContainer>
			<ContainerLevel>
				<Level top={percentage} gaugeColor={gaugeColor} />
			</ContainerLevel>
			<GaugeLabel>{label}</GaugeLabel>
		</MainContainer>
	);
}

export default Gauge;