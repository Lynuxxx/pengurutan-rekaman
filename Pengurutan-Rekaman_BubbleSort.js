//  PENGURUTAN REKAMAN -- SISTEM BERKAS --  SEMESTER 3 -- 03TPLM004 -- RUANG 319 -- S1 TEKNIK INFORMATIKA UNPAM
// PENGURUTAN BUBBLE SORT

const arr = [15, 31, 28, 43, 65, 35, 78, 20, 19];
let count = 1;

console.log(`\n########## PROGRAM PENGURUTAN BUBBLE SORT ##########\n\n`);

for (let h = 1; h < arr.length; h++) {
  // Membuat pengkondisian agar pengulangan berhenti ketika data sudah terurut
  let arr2 = [...arr].sort((a, b) => a - b);
  // Menggunakan operator 'every()' untuk mengecek apakah array-nya sama
  if (arr.every((value, index) => value === arr2[index])) {
    break;
  }

  console.log(`================`);
  console.log(`| Iterasi ke-${count} |`);
  console.log(`================`);
  count++;
  console.log(`Data: ${arr} `);

  // Membuat logika pengulangan BubbleSort dan menampilkan data beserta informasi iterasi
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      // Menampilkan informasi jika ada pertukaran
      console.log(`\tx[${i + 1}] vs x[${i}] atau ${arr[i]} dengan ${arr[i - 1]} -> pertukaran karena x[i] < x[i-1], berarti x[${i}] = ${arr[i - 1]}`);
      // Melakukan pertukan dengan bantuan variabel 'temp'
      let temp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = temp;
    } else {
      // Menampilkan informasi jika tidak ada pertukaran
      console.log(`\tx[${i + 1}] vs x[${i}] atau ${arr[i]} dengan ${arr[i - 1]} -> tidak ada pertukaran karena x[i] >= x[i-1]`);
    }
  }

  // Menampilkan hasil akhir per-iterasi
  console.log(`Hasil: ${arr} \n\n`);
}

const dataInput = document.getElementById('data');
const submitButton = document.querySelector('button');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const data = dataInput.value.split(',').map((x) => parseInt(x));
  dataInput.value = '';
  const numberOfData = data.length;

  // Inserting results into the article element
  const articleElement = document.getElementById('statisticalResults');
  articleElement.innerHTML = `
            
            `;
});
