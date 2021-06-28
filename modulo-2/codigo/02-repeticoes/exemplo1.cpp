//tabuada usando a repeticao "enquanto" - quando nao ha certeza do fim, a condicao aceita ate valor booleano por exemplo
#include <iostream>
using namespace std;

int main() {
    int num, i = 1, resultado;
    cout << "qual tabuada? ";
    cin >> num;
    while (i <= 10) {
        resultado = num * i;
        cout << "num x" << i << " = " << resultado
             << endl;

        i++;
    } 
}