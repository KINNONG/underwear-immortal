graph TD
    A["🎲 投掷三枚骰子"] --> B["第一枚骰子: 点数 N1"]
    A --> C["第二枚骰子: 点数 N2"] 
    A --> D["第三枚骰子: 点数 N3"]
    
    B --> E["从大安开始顺时针数N1步<br/>确定第一宫位"]
    C --> F["从第一宫开始顺时针数N2步<br/>确定第二宫位"]
    D --> G["从第二宫开始顺时针数N3步<br/>确定第三宫位"]
    
    E --> H["六神顺序<br/>1.大安 2.留连 3.速喜<br/>4.赤口 5.小吉 6.空亡"]
    F --> H
    G --> H
    
    H --> I["第一宫: 大安 → 青绿色"]
    H --> J["第二宫: 速喜 → 红紫色"]
    H --> K["第三宫: 小吉 → 黑蓝色"]
    
    I --> L["RGB颜色混合算法"]
    J --> L
    K --> L
    
    L --> M["计算RGB平均值"]
    M --> N["增强对比度和饱和度"]
    N --> O["生成最终颜色"]
    
    O --> P["🎨 内裤颜色结果<br/>混合色: 深紫青色<br/>HEX: #4a5c8a<br/>RGB: (74, 92, 138)"]
    
    O --> Q["📜 卦象解读<br/>三宫分别得大安、速喜、小吉<br/>青绿与红紫与黑蓝三色汇聚<br/>变化万千，能应对各种挑战"]
    
    style A fill:#ff6b6b,stroke:#fff,stroke-width:3px,color:#fff
    style P fill:#4a5c8a,stroke:#fff,stroke-width:3px,color:#fff
    style Q fill:#ffd93d,stroke:#fff,stroke-width:2px,color:#333
    style H fill:#6c5ce7,stroke:#fff,stroke-width:2px,color:#fff
    style L fill:#00b894,stroke:#fff,stroke-width:2px,color:#fff