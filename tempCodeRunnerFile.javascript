const data = [78,16,29,1,24,76,12,80,7,19,58,90]

let count = 1

for(let i=0; i<data.length-1; i++) {
  // Menghentikan perulangan jika data sudah terurut
  let data2 = [...data].sort((a, b) => a - b);

  // Menggunakan operator 'every()' untuk mengecek apakah array-nya sama
  if(data.every((value, index) => value === data2[index])) {
    break;
  }

  // Menampilkan data ditiap iterasi
  console.log(`\n\nIteration ${count}: \n`)
  for(let x=1; x<data.length-i; x++) {
    if(data[x] < data[x-1]) {
      console.log(`x${x+1} (${data[x]}) < x${x} (${data[x-1]}) => data ditukar, x${x+1} (${data[x-1]}) dan x${x} (${data[x]})`);
      let temp = data[x]
      data[x] = data[x-1]
      data[x-1] = temp
    } else {
      console.log(`x${x+1} (${data[x]}) > x${x} (${data[x-1]}) => -`);
    }
    // if(x==7) console.log(`x8 adalah ${data[x-1]}`);
  }
  console.log(`hasil iterasi ${count} = ${data}`)
  count++
}                                                       