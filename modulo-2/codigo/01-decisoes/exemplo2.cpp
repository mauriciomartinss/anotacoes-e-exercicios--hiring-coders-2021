#include <iostream>

using namespace std;

int main() {
    float nota1, nota2, media;
    cout << "escreva nota 1: ";
    cin >> nota1;
    cout << endl
         << "escreva nota 2: ";
    cin >> nota2;
    media = (nota1 + nota2)/2;
    if(media >= 9 and media <= 10) {
        cout << "conceito A";
    } else if (media >= 8 and media < 9) {
        cout << "conceito B";
    } else if (media >= 6 and media < 8) {
        cout << "conceito C";
    } else if (media >= 6 and media < 6) {
        cout << "conceito D";
    } else {
        cout << "reprovado";
    }
    cout << endl;
    return 0;
}