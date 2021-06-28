#include <iostream>

using namespace std;

int main() {
    float nota1, nota2, media;
    cout << "digite nota 1: ";
    cin >> nota1;
    cout << endl
         << "digite nota 2: ";
    cin >> nota2;
    cout << endl
         << "a media vale ";
    media = (nota1 + nota2)/2;
    cout << media
         << endl;

    if (media >= 6.0) {
        cout << "parabens, vc foi aprovado!"
             << endl;
    } else {
        cout << "nos vemos ano que vem";
    }
    cout << endl;
    return 0;
}