import React, { useCallback, useState } from 'react'
import { useStyles } from './Style'

function App() {
  const styles = useStyles()
  const [critDamage, setCritDamage] = useState<number>(0)
  const [critPercent, setCritPercent] = useState<number>(0)
  const [strength, setStrength] = useState<number>(0)
  const [result, setResult] = useState<number>(0)

  const onChangeCritDamage = useCallback((e: any) => {
    setCritDamage(e.target.value)
  }, [])

  const onChangeCritPercent = useCallback((e: any) => {
    setCritPercent(e.target.value)
  }, [])

  const onChangeStrength = useCallback((e: any) => {
    setStrength(e.target.value)
  }, [])

  const onSubmit = useCallback(() => {
    setResult(Number(critDamage) + Number(critPercent) * 2 + Number(strength))
  }, [critDamage, critPercent, strength])
  return (
    <div>
      <h1 className={styles.title}>原神スコアチェッカー</h1>
      <div className={styles.container}>
        <span>
          <p className={styles.label}>会心ダメージ</p>
          <input
            type='number'
            onChange={onChangeCritDamage}
            className={styles.input}
            placeholder='小数点なし'
          />
        </span>
        <span>
          <p className={styles.label}>会心率</p>
          <input
            type='number'
            onChange={onChangeCritPercent}
            className={styles.input}
            placeholder='小数点なし'
          />
        </span>
        <span>
          <p className={styles.label}>攻撃力％</p>
          <input
            type='number'
            onChange={onChangeStrength}
            className={styles.input}
            placeholder='小数点なし'
          />
        </span>
      </div>
      <span>
        <button onClick={onSubmit} className={styles.button}>
          計算する
        </button>
      </span>
      <span className={styles.result}>スコア{result}</span>
    </div>
  )
}

export default App
