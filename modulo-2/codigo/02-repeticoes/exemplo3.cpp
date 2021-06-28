//tabuada usando a repeticao "enquanto"
#include <iostream>
using namespace std;

int main() {
    int quantNumeros, contador = 0, numeroQuadrado;
    cout << "digite um limite: ";
    cin >> quantNumeros;
    while(contador <= quantNumeros) {
        if (contador%2 == 0) {
            numeroQuadrado = contador * contador;
            cout << numeroQuadrado
                 << endl;
        }
        contador++;
    }
    cout<<endl;

    return 0;
}