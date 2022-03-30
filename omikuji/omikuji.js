const username = prompt("お名前を教えて下さい。");
const nameElement = document.getElementById("name");

if (username) {
    nameElement.innerHTML = username;
} else {
    nameElement.innerHTML = "名無し";
}


const omikujiList = [
    {num: 0, fortune: "大吉"},
    {num: 1, fortune: "中吉"},
    {num: 2, fortune: "小吉"},
    {num: 3, fortune: "吉"},
    {num: 4, fortune: "凶"},
];

const rand = {
    num: Math.floor(Math.random() * 5)
};

const userResult = rand => {
    const fortune = omikujiList.find(p => p.num === rand.num).fortune;
    return fortune;
}
document.getElementById("result").innerHTML = userResult(rand);