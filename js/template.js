// 使用 fetch 动态加载 aaa.html 并插入多个模板
fetch('../template.html')
.then(response => response.text())
.then(data => {
    // 创建一个临时 DOM 容器来解析模板内容
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = data;

    // 博客页Had
    const blig_had = tempDiv.querySelector('#blig_had').content;
    document.querySelectorAll('.blig_had').forEach(el => el.appendChild(blig_had.cloneNode(true)));

    //副标题
    const TP_LittleTitle = tempDiv.querySelector('#TP_LittleTitle').content;
    document.querySelectorAll('.TP_LittleTitle').forEach(el => el.appendChild(TP_LittleTitle.cloneNode(true)));

    
    //社团介绍
    const TP_introduce = tempDiv.querySelector('#TP_introduce').content;
    document.querySelectorAll('.TP_introduce').forEach(el => el.appendChild(TP_introduce.cloneNode(true)));

    const TP_idea = tempDiv.querySelector('#TP_Idea').content;
    document.querySelectorAll('.TP_Idea').forEach(el => el.appendChild(TP_idea.cloneNode(true)));



});