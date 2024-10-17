// 假设这是生日数据（可以从数据库获取）
const birthdays = [
    { name: "凉宫春日", date: "10-8" }, 
    { name: "阿虚", date: "10-11"},

    { name: "李秀成", date: "10-8" },
    { name: "郭家和", date: "8-8" },
    { name: "陈子轩", date: "11-27" },
    { name: "杜雨航", date: "7-14" },
    { name: "龙生", date: "2-6" },
];

// 获取当前日期
const today = new Date();
const currentMonthDay = ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2);

// 查找今天是否有人过生日（返回所有匹配的人）
const birthdayPeople = birthdays.filter(person => person.date === currentMonthDay);

// 获取模板和容器
const template = document.getElementById('birthday-template');
const container = document.getElementById('birthday-container');
const clone = template.content.cloneNode(true);
const message = clone.querySelector('#birthday-message');

// 如果找到过生日的人，显示他们的名字
if (birthdayPeople.length > 0) {
    const names = birthdayPeople.map(person => person.name).join('和');
    message.textContent = `祝 ${names} 生日快乐!!`;
} else {
    message.textContent = "忌日快乐";
}

// 将克隆的内容添加到页面上
container.appendChild(clone);