window.onload = function () {
    let investment1 = document.getElementById("ammount");
    let interest1 = document.getElementById("interest");
    let btn1 = document.getElementById("btn1");
    let out1 = document.getElementById("otp1");
    function fun1() {
    out1.innerHTML = investment1.value / 100 * interest1.value
    };
    btn1.addEventListener("click", fun1);

    let debt = document.getElementById("debt");
    let debt_interest = document.getElementById("debt-interest");
    let month = document.getElementById("month-to-repay");
    let btn2 = document.getElementById("btn2");
    let out2 = document.getElementById("otp2");
    let out3 = document.getElementById("otp3");
    function fun2() {
    out2.innerHTML = (debt.value * (debt_interest.value / 100 / 12 * (1 + debt_interest.value / 100 / 12) ** month.value) / ((1 + debt_interest.value / 100 / 12) ** month.value - 1)).toFixed(2);
    out3.innerHTML = ((debt.value * (debt_interest.value / 100 / 12 * (1 + debt_interest.value / 100 / 12) ** month.value) / ((1 + debt_interest.value / 100 / 12) ** month.value - 1)) * month.value).toFixed(2);
    };
    btn2.addEventListener("click", fun2);
};