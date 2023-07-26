
interface feedBackProps {
    tabList: Array<{           //要传入的值是数组,必须要尖括号包裹起来
    title: string,
    active?: boolean
    }>,
    maxOneRow?: number,        //每行最多几个
    current: number,     //没问号的意思是必传,后面的number是变量的类型
    onClick: any,
}
export default function FeedBack(props: feedBackProps): JSX.Element;