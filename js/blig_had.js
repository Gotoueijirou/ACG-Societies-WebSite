// 使用 fetch 动态加载 div
fetch('../blig_had.html')
.then(response => response.text())
.then(data => {
    document.getElementById('blig_had').innerHTML = data;
});