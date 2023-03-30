
interface LocationProps {
    index: number;
    winner: Array<number>;
    value: number;
    onClick: () => void;
  }
  export default function Square(props: LocationProps): JSX.Element;