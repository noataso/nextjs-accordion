import { useCallback, useRef, useState } from "react"
import styles from "../styles/accordion.module.css"
const accordion = () => {
    const [isShow0,setIsShow0]=useState(false);
    const [isShow1,setIsShow1]=useState(false);
    const [isShow2,setIsShow2]=useState(false);
    const [isShow3,setIsShow3]=useState(false);
    const [isShow4,setIsShow4]=useState(false);
    const [isShow5,setIsShow5]=useState(false);
    // const [isNumber,setIsNumber]=useState(0);
    const [contents,setContents]=useState([
        {
            id:0,
            question:"今日食べたのは？",
            answer:"ご飯",
        },
        {
            id:1,
            question:"昨日食べたのは？",
            answer:"寿司",
        },
        {
            id:2,
            question:"明日食べるのは？",
            answer:"写真",
        },
        {
            id:3,
            question:"趣味は？",
            answer:"ご飯",
        },
        {
            id:4,
            question:"一番行きたい場所は？",
            answer:"愛媛",
        },
        {
            id:5,
            question:"好きなスポーツは？",
            answer:"野球",
        },
    ])

    const handleAddClick0=()=>{
        setIsShow0(!isShow0)
    };
    const handleAddClick1=()=>{
        setIsShow1(!isShow1)
    };
    const handleAddClick2=()=>{
        setIsShow2(!isShow2)
    };
    const handleAddClick3=()=>{
        setIsShow3(!isShow3)
    };
    const handleAddClick4=()=>{
        setIsShow4(!isShow4)
    };
    const handleAddClick5=()=>{
        setIsShow5(!isShow5)
    };
    return (
        <div className={styles.container}>
            <div className={styles.accordion}>
                <div className={styles.accordionTrigger} onClick={handleAddClick0}>{contents[0].question}</div>
                {isShow0? <p className={styles.accordionContent}>{contents[0].answer}</p>:null}
            </div>
            <div className={styles.accordion}>
                <div className={styles.accordionTrigger} onClick={handleAddClick1}>{contents[1].question}</div>
                {isShow1? <p className={styles.accordionContent}>{contents[1].answer}</p>:null}
            </div>
            <div className={styles.accordion}>
                <div className={styles.accordionTrigger} onClick={handleAddClick2}>{contents[2].question}</div>
                {isShow2? <p className={styles.accordionContent}>{contents[2].answer}</p>:null}
            </div>
            <div className={styles.accordion}>
                <div className={styles.accordionTrigger} onClick={handleAddClick3}>{contents[3].question}</div>
                {isShow3? <p className={styles.accordionContent}>{contents[3].answer}</p>:null}
            </div>
            <div className={styles.accordion}>
                <div className={styles.accordionTrigger} onClick={handleAddClick4}>{contents[4].question}</div>
                {isShow4? <p className={styles.accordionContent}>{contents[4].answer}</p>:null}
            </div>
            <div className={styles.accordion}>
                <div className={styles.accordionTrigger} onClick={handleAddClick5}>{contents[5].question}</div>
                {isShow5? <p className={styles.accordionContent}>{contents[5].answer}</p>:null}
            </div>
        </div>
    );
}

export default accordion;