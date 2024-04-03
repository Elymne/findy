export default function Pager({ pageNb, onClick }: PagerParams): JSX.Element {
    return <ul></ul>
}

type PagerParams = {
    pageNb: number
    onClick: (index: number) => Promise<void>
}
