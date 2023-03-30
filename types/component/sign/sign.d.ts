
interface SignProps {
    index: number;
    winner: Array<number>;
    value: number;
    onClick: () => void;
  }
  export default function Square(props: SignProps): JSX.Element;