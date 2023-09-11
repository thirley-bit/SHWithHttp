
interface LoginInputProps {
    tabList: Array<{           //要传入的值是数组,必须要尖括号包裹起来
    title: string,
    active?: boolean
    }>,
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse',    //问号的意思是可传可不传(是否换行的意思)
    maxOneRow?: number,        //每行最多几个
    current: number,     //没问号的意思是必传,后面的number是变量的类型
    onClick: any,
}
export default function LoginInput(props: LoginInputProps): JSX.Element;