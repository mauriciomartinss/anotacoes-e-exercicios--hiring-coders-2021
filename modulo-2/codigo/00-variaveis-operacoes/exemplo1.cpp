//vou fazer em c++ mesmo kkkk
// o programa gera a quantidade de dias uma pessoa viveu

#include <iostream>
using namespace std;

void anosDias(int quantAnos, int &quantDias) {
    quantDias += quantAnos * 365;
}

void mesesDias(int quantMeses, int &quantDias) {
    quantDias += quantMeses * 30;
}

void somaDias (int quantDias, int &diasTot) {
    diasTot += quantDias;
}

void exibeResultado (int diasTot) {
    cout << "sao exatamente "
         << diasTot
         << " dias vividos.";
}

int main() {
    int anos, meses, dias, diasTot = 0;

    cout << "digite quantos anos: ";
    cin >> anos;
    cout << endl
        << "digite quantos meses: ";
    cin >> meses;
    cout << endl
         << "digite quantos dias: ";
    cin >> dias;
    cout << endl;

    anosDias(anos, diasTot);
    mesesDias(meses, diasTot);
    somaDias(dias, diasTot);

    exibeResultado(diasTot);

    cout<< endl;

    return 0;
}


