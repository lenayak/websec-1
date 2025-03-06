function calculate() {
    try {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        const operator = document.getElementById("operator").value;
        const resultsBox = document.getElementById("results");

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Ошибка! Введите корректные числа.");
        }

        let result;
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    throw new Error("Ошибка: Деление на ноль!");
                }
                result = (num1 / num2).toFixed(2);
                break;
            default:
                throw new Error("Неизвестная операция.");
        }

        addResult(resultsBox, `${num1} ${operator} ${num2} = ${result}`);

        if (resultsBox.children.length > 5) {
            resultsBox.removeChild(resultsBox.firstChild);
        }
    } catch (error) {
        alert(error.message);
    }
}

function addResult(resultsBox, resultText) {
    const previousResults = resultsBox.getElementsByClassName("result-item");
    for (let i = 0; i < previousResults.length; i++) {
        previousResults[i].classList.add("old-result");
    }

    const newResult = document.createElement("div");
    newResult.classList.add("result-item");
    newResult.innerHTML = `<b>${resultText}</b>`;

    resultsBox.append(newResult);
}