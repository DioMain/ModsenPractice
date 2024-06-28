import PropsBase from "../../types/propsBase";

interface InputSelectProps extends PropsBase {
  onSelectionChanged?: (value: string) => void;
}

export default InputSelectProps;