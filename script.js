const arrInput = document.getElementById('data');
const resultsContainer = document.getElementById('Results');

function bubbleSort(arr) {
  let count = 1;

  // resultsContainer.innerHTML += `<br>########## PROGRAM PENGURUTAN BUBBLE SORT ##########<br><br>`;

  for (let h = 1; h < arr.length; h++) {
    // Membuat pengkondisian agar pengulangan berhenti ketika data sudah terurut
    let arr2 = [...arr].sort((a, b) => a - b);
    // Menggunakan operator 'every()' untuk mengecek apakah array-nya sama
    if (arr.every((value, index) => value === arr2[index])) {
      break;
    }

    resultsContainer.innerHTML += `<span> <br>================<br> </span>`;
    resultsContainer.innerHTML += `<span> | Iterasi ke-${count} |<br> </span>`;
    resultsContainer.innerHTML += `<span> ================<br> </span>`;
    // resultsContainer.innerHTML += `Data: ${arr} <br>`;

    // Membuat logika pengulangan BubbleSort dan menampilkan data beserta informasi iterasi
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        // Menampilkan informasi jika ada pertukaran
        resultsContainer.innerHTML += `<p> X[${i + 1}] vs X[${i}] atau ${arr[i]} dengan ${arr[i - 1]}  <span class="tab"> => </span>  pertukaran karena X[i] <p X[i-1], berarti X[${i + 1}] = ${arr[i - 1]}<br> </p>`;
        // Melakukan pertukan dengan bantuan variabel 'temp'
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      } else {
        // Menampilkan informasi jika tidak ada pertukaran
        resultsContainer.innerHTML += `<p> X[${i + 1}] vs X[${i}] atau ${arr[i]} dengan ${arr[i - 1]} <span class="tab"> => </span> tidak ada pertukaran karena X[i] > X[i-1]<br> </p>`;
      }
    }

    // Menampilkan hasil akhir per-iterasi
    resultsContainer.innerHTML += `<p> Hasil setelah iterasi ke-${count} : ${arr} <br><br> </p>`;
    count++;
  }
}

document.querySelector('.form-data button').addEventListener('click', function (event) {
  // Menghentikan aksi default formulir agar halaman tidak dimuat ulang
  event.preventDefault();

  // Mengambil data input dari elemen dengan ID 'data'
  const inputData = arrInput.value.trim();

  // Mengubah input string menjadi array of numbers
  const arr = inputData.split(',').map(Number);

  // Mengosongkan input data
  arrInput.value = '';

  // Memanggil fungsi bubbleSort dengan input array
  bubbleSort(arr);
});
