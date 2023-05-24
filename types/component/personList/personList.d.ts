
interface publishProps {
    type: string;
    user: string;
    selector: Array<{}>
    showData: Array<{}>
}
export default function Publish(props: publishProps): JSX.Element;