
interface SearchBarProps {
    type: string;
    user: string;
    selector: Array<{}>
    showData: Array<{}>
}
export default function SearchBar(props: SearchBarProps): JSX.Element;