import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  // 値を直接渡した書き方
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  // 関数を渡す書き方
  const increment2 = () => setCount(prevCount => prevCount + 1)
  const decrement2 = () => setCount(prevCount => prevCount - 1)

  // リセットする
  const reset = () => setCount(0)

  // 値を二倍にする
  const doubled = () => setCount(count * 2)

  // 3の倍数のときだけ3で割る
  const isThree = () => {
    if ((count % 3) === 0) {
      setCount(count / 3)
    }
  }

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={doubled}>x2</button>
        <button onClick={isThree}>3の倍数のときだけ3で割る</button>
      </div>
    </>
  )
}

export default App
