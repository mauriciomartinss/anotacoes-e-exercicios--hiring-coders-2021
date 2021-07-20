// type assertion

const minhaIdade: any = 23;

(minhaIdade as number); //o ts vai entender que no momento ele será considerado um number (sendo que antes ele foi criado com tipo indefinido)

(minhaIdade as number).toString();

// const input = document.getElementById("numero1") as HTMLInputElement; isso eh uma forma

const input = <HTMLInputElement> document.getElementById("numero1"); //essa eh outra
console.log(input.value);
