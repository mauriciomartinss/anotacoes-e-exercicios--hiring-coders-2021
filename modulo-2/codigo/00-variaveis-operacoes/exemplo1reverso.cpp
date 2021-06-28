#include <iostream>
using namespace std;

void quantDias(int resto) {
    cout << "quantidade de dias: "
         << resto;
}

void quantMeses (int resto) {
    cout << "quantidade de meses: "
         << resto/30
         << endl;
    resto = resto % 30;
    quantDias(resto);
}

void quantAnos(int &diasTot) {
    int resto;
    cout << "quantidade de anos: "
         << diasTot / 365
         << endl;
    resto = diasTot % 365;
    quantMeses(resto);
}
int main() {
    int diasTot; //, meses, anos, dias;

    cout<< "digite o total de dias: ";
    cin>> diasTot;
    quantAnos(diasTot);
    cout << endl;
    return 0;
}