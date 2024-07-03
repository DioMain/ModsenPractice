import PropsBase from "../../types/propsBase";

interface InputSearchProps extends PropsBase {
  onTextChanged: (text: string) => void;
  onSearchSubmit: () => void;
}

export default InputSearchProps;