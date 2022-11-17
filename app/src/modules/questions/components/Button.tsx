import {ContainerButton} from "./styledComponents";
interface IProps {
  label: string;
  callback: () => void;
  selected: boolean;
}

function Button({ label, callback, selected }: IProps) {
  return(
    <ContainerButton selected={selected} onClick={callback}>{label}</ContainerButton>
  )
}

export default Button