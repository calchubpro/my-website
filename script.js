// دالة حساب المعدل
function calc() {
  let sum = 0;
  let count = 0;

  for (let i = 1; i <= 8; i++) {
    let value = document.getElementById("g" + i).value.trim();

    if (value !== "" && !isNaN(value)) {
      sum += Number(value);
      count++;
    }
  }

  if (count === 0) {
    document.getElementById("result").innerText = "ادخل درجات اولاً";
  } else {
    let avg = sum / count;
    document.getElementById("result").innerText = "المعدل: " + avg.toFixed(2);
  }
}


// 🔥 دالة تحميل PDF
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let sum = 0;
  let count = 0;
  let text = "Grades:\n\n";

  for (let i = 1; i <= 8; i++) {
    let value = document.getElementById("g" + i).value.trim();

    if (value !== "" && !isNaN(value)) {
      sum += Number(value);
      count++;
      text += "Grade " + i + ": " + value + "\n";
    }
  }

  if (count === 0) {
    alert("ادخل درجات اولاً");
    return;
  }

  let avg = sum / count;

  text += "\nAverage: " + avg.toFixed(2);

  doc.text(text, 10, 10);
  doc.save("result.pdf");
}
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
function calcPercent() {
  const percent = parseFloat(document.getElementById("percent").value);
  const number = parseFloat(document.getElementById("number").value);

  if (!isNaN(percent) && !isNaN(number)) {
    const result = (percent / 100) * number;
    document.getElementById("percentResult").innerText =
      "النتيجة: " + result;
  } else {
    document.getElementById("percentResult").innerText =
      "ادخل أرقام صحيحة";
  }
}