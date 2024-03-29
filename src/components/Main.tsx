
import '../css/main.css'
import Button from './Button'
import SpacingGrid from './Grid'
const Main = () => {
    return(
        <>
            <div className="top-wrapper">
                <div className="main">
                    <h1>簡単に履歴書・職務経歴書が作れます！</h1>
                    <p>自宅でも外出先でも、必要なときにいつでも履歴書を作成できます。</p>
                    <p>作成した履歴書は、ダウンロードが可能です。(Excel)</p>
                    <Button />
                </div>
            </div>
            <div className="contents">
                <SpacingGrid />
            </div>
        </>
    )
}

export default Main;