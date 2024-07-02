import PropsBase from "../../types/propsBase";

interface IconButtonProps extends PropsBase {
  image: string;
  onClick?: () => void;
}

export default IconButtonProps;
