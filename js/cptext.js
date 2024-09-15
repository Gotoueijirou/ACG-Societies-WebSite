function copyText() {
    // 获取要复制的文本
    const text = document.getElementById('textToCopy').innerText;

    // 创建一个临时的文本域元素
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);

    // 选中并复制文本
    tempTextArea.select();
    document.execCommand('copy');

    // 移除临时的文本域
    document.body.removeChild(tempTextArea);

    // 显示复制成功消息
    alert("复制成功！");
}