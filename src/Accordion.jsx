import React, { useState } from 'react'
import styles from "./Accordion.module.css"
export default function Accordion({items}) {
    // State to keep track of which accordion item is open
    const [openIndex, setOpenIndex] = useState(null);

    // Function to toggle the accordion item
    const toggleItem = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };
    return (
        <div>
            {/* Mapping through the accordion items */}
            {items.map((item, index) => (
                <div className={styles.main_div} key={index}>
                    {/* Accordion header */}
                    <div
                    className={styles.title}
                        style={{ cursor: 'pointer' }}
                        onClick={() => toggleItem(index)}
                    >
                        {item.title}
                    </div>
                    {/* Conditional rendering for accordion body */}
                    {openIndex === index && (
                        <div className={styles.content_div}>
                            {item.body}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
